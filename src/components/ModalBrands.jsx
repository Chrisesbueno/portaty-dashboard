import * as React from "react";
import Modal from "@mui/material/Modal";
import { Alert, Button, FormControl, InputLabel, MenuItem, Select, TextField, CircularProgress } from "@mui/material";
import styles from "@/styles/Modal.module.css";
import { useState } from "react";
// amplify
import { Auth, API, graphqlOperation, Storage } from 'aws-amplify'
import { createADBrand } from '@/graphql/mutations'

export default function ModalBrands({ open, close }) {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [abbr, setAbbr] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const onHandleRegister = async () => {
    console.log("Nombre: ", name)
    console.log("Imagen: ", file)
    console.log("Abrr: ", abbr)

    if (name.trim() === "") return alert("name vacio")
    if (file === "") return alert("file vacio")
    if (abbr.trim() === "") return alert("abbr vacio")
    setIsLoading(true)
    try {
       // usuario logeado
       const { username } = await Auth.currentAuthenticatedUser();
      // obtener datos de almacenamiento 
      const bucketName = Storage._config.AWSS3.bucket;
      const region = Storage._config.AWSS3.region;
      // subir imagen 
      const key = await uploadImage(name, file)
      // obtener url
      const url = `https:${bucketName}.s3.${region}.amazonaws.com/public/${key}`
      const params = {
        input: {
          name: name.trim(),
          abreviation: abbr.trim(),
          path: key,
          image: url,
          createdBy: username
        }
      }

      //crear categoria
      const result = await API.graphql(graphqlOperation(createADBrand, params));
      console.log("Result: ", result)
      onHandleClose();
      alert("Marca Subida")
    } catch (error) {
      console.error("Error: ", error);
    }
    setIsLoading(false)
  }

  const uploadImage = async (name, file) => {
    const { key } = await Storage.put(`app/images/brands/${name}.image`, file, {
      level: "public",
      contentType: file.type,
      progressCallback(progress) {
        console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
      },

    })
    return key
  }

  const searchImage = async (path, imageKey) => {
    try {
      const objects = await Storage.list(path, { pageSize: 20 });
      console.log(objects)
      // const imageObject = objects.find((object) => object.key === imageKey);

      // if (imageObject) {
      //   const { bucket, region, key } = imageObject;
      //   const url = `https://${bucket}.s3.${region}.amazonaws.com/${key}`;
      //   console.log('URL de la imagen:', url);
      //   return url;
      // } else {
      //   console.error('No se encontró la imagen en el bucket de S3');
      //   return null;
      // }
    } catch (error) {
      console.error('Error al obtener la URL de la imagen:', error);
      return null;
    }
  }

  const onHandleClose = () => {
    clear();
    close();
  }

  const clear = () => {
    setName("");
    setFile("");
    setAbbr("");
    setIsLoading(false)
  }

  const onHandleFileChange = (data) => {
    const file = data.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

    if (file && allowedTypes.includes(file.type)) {
      setFile(file)
      console.log(file.name)
    } else {
      alert("El archivo tiene que ser una imagen");
    }
  }

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
                    onChange={(e) => setName((e.target.value).toUpperCase())}
                  />
                  <TextField
                    id="outlined-basic"
                    // label="Image"
                    type='file'
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
                    onChange={(e) => setAbbr((e.target.value).toUpperCase())}
                  />
                </div>
              </div>
            </div>

            <div className={styles.buttons}>
              <Button variant="contained" size="large"
                onClick={onHandleRegister}
                disabled={isLoading ? true : false}
              >
                {isLoading ? <CircularProgress size={26} color='secondary' /> : "Register"}
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
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
