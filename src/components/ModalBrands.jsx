import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import {
  Alert,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  CircularProgress,
} from "@mui/material";
import styles from "@/styles/Modal.module.css";

// amplify
import { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import { createADBrand } from "@/graphql/mutations";
// hooks
import useExcel from "@/hooks/useExcel";
import useImage from "@/hooks/useImage";

export default function ModalBrands({ open, close }) {
  const { fetchImageFromUri, uploadImage } = useImage();
  const [upload, uploadExcel] = useExcel();
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [abbr, setAbbr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onHandleMassRegistration = async () => {
    if (upload.length === 0) return alert("sin archivo selecionado");
    setIsLoading(true);
    try {
      // usuario logeado
      const { username } = await Auth.currentAuthenticatedUser();
      // obtener datos de almacenamiento
      const bucketName = Storage._config.AWSS3.bucket;

      //  cargar imagen y subir
      const imagesBlobsPromise = await Promise.all(
        upload.map(async (item, index) => {
          // obtener blod de url
          const blod = await fetchImageFromUri(item.image);
          // subir imagen
          const arrayType = blod.type.split("/");
          const typeFIle = arrayType[arrayType.length - 1];
          const nameFile = `app/images/brands/${item.name}.${typeFIle}`;
          const key = await uploadImage(nameFile, blod);
          // obtener url
          const url = `https://${bucketName}.s3.amazonaws.com/public/${key}`;
          // definir parametros de la marca
          const params = {
            input: {
              name: item.name.trim().toUpperCase(),
              abreviation: "",
              path: key,
              image: url,
              createdBy: username,
            },
          };
          //crear marca
          const result = await API.graphql(
            graphqlOperation(createADBrand, params)
          );
          return result.data.createADBrand;
        })
      );
      console.log(imagesBlobsPromise);
      onHandleClose();
      alert("Marcas Subidas");
    } catch (error) {
      setIsLoading(false);
      console.error("Error: ", error);
    }
    setIsLoading(false);
  };

  const onHandleRegister = async () => {
    console.log("Nombre: ", name);
    console.log("Imagen: ", file);
    console.log("Abrr: ", abbr);

    if (name.trim() === "") return alert("name vacio");
    if (file === "") return alert("file vacio");
    if (abbr.trim() === "") return alert("abbr vacio");
    setIsLoading(true);
    try {
      // usuario logeado
      const { username } = await Auth.currentAuthenticatedUser();
      // obtener datos de almacenamiento
      const bucketName = Storage._config.AWSS3.bucket;
      const region = Storage._config.AWSS3.region;

      // subir imagen
      const key = await uploadImage(name, file);
      // obtener url
      const url = `https://${bucketName}.s3.${region}.amazonaws.com/public/${key}`;
      const params = {
        input: {
          name: name.trim(),
          abreviation: abbr.trim(),
          path: key,
          image: url,
          createdBy: username,
        },
      };

      //crear categoria
      const result = await API.graphql(graphqlOperation(createADBrand, params));
      console.log("Result: ", result);
      onHandleClose();
      alert("Marca Subida");
    } catch (error) {
      console.error("Error: ", error);
    }
    setIsLoading(false);
  };

  const onHandleClose = () => {
    clear();
    close();
  };

  const clear = () => {
    setName("");
    setFile("");
    setAbbr("");
    setIsLoading(false);
  };

  const onHandleFileChange = (data) => {
    const file = data.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

    if (file && allowedTypes.includes(file.type)) {
      setFile(file);
      console.log(file.name);
    } else {
      alert("El archivo tiene que ser una imagen");
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modal}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.title}>
                <h2>Register a new brand</h2>
              </div>
              <div className={styles.inputs}>
                <div className={styles.input}>
                  <TextField
                    id="outlined-basic"
                    label="Nombre"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value.toUpperCase())}
                  />
                  <TextField
                    id="outlined-basic"
                    // label="Image"
                    type="file"
                    variant="outlined"
                    placeholder="Seleccione una imagen"
                    // value={file !== undefined ? file?.name.toString() : ""}
                    onChange={onHandleFileChange}
                  />
                </div>
                <div className={styles.input}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Abreviacion"
                    inputProps={{ maxLength: 3 }}
                    value={abbr}
                    onChange={(e) => setAbbr(e.target.value.toUpperCase())}
                  />
                </div>
                {/* <div className={styles.input}>
                  <input
                    type="file"
                    name="Carga Masiva"
                    id="cargamasiva"
                    accept=".xls,.xlsx"
                    onChange={(e) => uploadExcel(e)}
                  />
                </div> */}
              </div>
            </div>

            <div className={styles.buttons}>
              <Button
                variant="contained"
                size="large"
                onClick={onHandleRegister}
                disabled={isLoading ? true : false}
              >
                {isLoading ? (
                  <CircularProgress size={26} color="secondary" />
                ) : (
                  "Register"
                )}
              </Button>
              <Button
                variant="contained"
                size="large"
                color="error"
                onClick={onHandleClose}
                disabled={isLoading ? true : false}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                size="large"
                onClick={onHandleMassRegistration}
                disabled={isLoading ? true : false}
              >
                {isLoading ? (
                  <CircularProgress size={26} color="secondary" />
                ) : (
                  "Registro Masivo"
                )}
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
