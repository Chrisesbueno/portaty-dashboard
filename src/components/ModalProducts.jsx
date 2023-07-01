import * as React from "react";
import Modal from "@mui/material/Modal";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  CircularProgress
} from "@mui/material";

import styles from "@/styles/Modal.module.css";
import { useState, useEffect } from "react";

// amplify
import { Auth, API, graphqlOperation, Storage } from 'aws-amplify'
import { createADProduct, createCategoryBrands } from '@/graphql/mutations'
import { categoryBrandsByADCategoryId } from '@/graphql/queries'
import { listADCategories, listADBrands } from '@/graphql/queries'



export default function ModalProducts({ open, close }) {
  const [categoryID, setCategoryID] = useState("");
  const [brandID, setBrandID] = useState("");
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [paths, setPaths] = useState([]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(undefined)
  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)





  useEffect(() => {
    if (open) fetchData()
    console.log("modal abierto")
  }, [open])


  const fetchData = () => {
    fetchCategories()
    fetchBrands()
  }
  const fetchCategories = () => API.graphql(graphqlOperation(listADCategories)).then((r) => setCategories(r.data.listADCategories.items))
  const fetchBrands = () => API.graphql(graphqlOperation(listADBrands)).then((r) => setBrands(r.data.listADBrands.items))





  const onHandleImageSelect = (event) => {
    const files = event.target.files;
    console.log(files)
    if (files.length > 3) alert("Solo puedes seleccionar 3, se eligieron las primeras 3")

    const selected = [];

    for (let i = 0; i < files.length; i++) {
      selected.push(files[i]);
    }
    console.log(selected)
    setImages(selected);
  }


  const onHandleRegister = async () => {
    console.log("DATA: ", {
      name,
      description,
      price,
      categoryID,
      brandID,
      images
    })

    if (name === "" || description === "" || categoryID === "" || brandID === "" || !images.length > 0 || price === undefined) {
      return alert("Campos vacios")
    }
    setIsLoading(true)
    try {
      // usuario logeado
      const { username } = await Auth.currentAuthenticatedUser();
      // // Subir imagenes 
      const keys = await uploadImages(name, images);
      if (keys === undefined) return
      console.log(keys)
      //  obtener url
      const urls = await getImageUrls(keys)
      if (urls === undefined) return
      console.log(urls)
      // creamos producto 
      const params = {
        input: {
          name: name.trim(),
          images: urls,
          paths: keys,
          description: description.trim(),
          suggestedPrice: price,
          categoryID: categoryID,
          brandID: brandID,
          createdBy: username
        }
      }

      const result = await API.graphql(graphqlOperation(createADProduct, params))
      console.log("RESULT: ", result)
      // verificamos si existe una relacion entre la categoria y la marca 
      const params2 = {
        aDCategoryId: categoryID,
        filter: {
          aDBrandId: { eq: brandID }
        }
      }
      const result2 = await API.graphql(graphqlOperation(categoryBrandsByADCategoryId, params2))
      console.log("RELACION: ", result2)
      if (result2.data.categoryBrandsByADCategoryId.items.length > 0) return closeOther();

      //  si no hay relacion crearla 
      const params3 = {
        input: {
          aDBrandId: brandID,
          aDCategoryId: categoryID
        }
      }
      const result3 = await API.graphql(graphqlOperation(createCategoryBrands, params3))
      console.log("CREADO NUEVO: ", result3)

      onHandleClose();

    } catch (error) {
      console.log("Ocurrio un error", error)
    }
    setIsLoading(false)
  }

  const closeOther = () => {
    alert("Producto creado");
    onHandleClose();
  }
  const uploadImages = async (name, files) => {
    try {
      const uploadPromises = files.map(async (file, index) => {

        const { key } = await Storage.put(`app/images/products/${name}/${name}-${index}.image`, file, {
          level: "public",
          contentType: file.type,
          progressCallback(progress) {
            console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
          },
        })
        return key
      })
      const uploadImageKeys = await Promise.all(uploadPromises)
      return uploadImageKeys
    } catch (error) {
      console.error("Error al cargar imagenes", error);
      return undefined
    }

  }

  const getImageUrls = async (paths) => {
    // obtener datos de almacenamiento 
    const bucketName = Storage._config.AWSS3.bucket;
    const region = Storage._config.AWSS3.region;
    try {
      const urlPromises = paths.map(async (path) => {
        const url = `https://${bucketName}.s3.${region}.amazonaws.com/public/${path}`
        return url;
      });

      const urls = await Promise.all(urlPromises);
      return urls
    } catch (error) {
      console.error('Error al obtener las URL de las imágenes', error);
      return undefined
    }

  }

  const clear = () => {
    setName("")
    setDescription("")
    setPrice(undefined)
    setImages([])
    setPaths([])
    setBrandID("")
    setCategoryID("")
    setCategories([])
    setBrands([])
    setIsLoading(false)
  }
  const onHandleClose = () => {
    clear();
    close();
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
                <h2>Register a new product</h2>
              </div>
              <div className={styles.inputs}>
                {/* <div className={styles.input}> */}
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName((e.target.value).toUpperCase())}
                />

                {/* </div> */}
                <div className={styles.input}>
                  <TextField
                    id="outlined-basic"
                    label="Price"
                    variant="outlined"
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    type="file"
                    variant="outlined"
                    inputProps={{
                      multiple: true
                    }}
                    onChange={onHandleImageSelect}
                  />
                </div>
                <TextField
                  id="outlined-multiline-static"
                  label="Descripcion"
                  multiline
                  rows={1}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <div className={styles.input}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Categoria
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={categoryID}
                      label="Categoria"
                      onChange={(e) => setCategoryID(e.target.value)}
                    >

                      {
                        categories.length > 0 &&
                        categories.map((item, index) => (
                          <MenuItem key={index} value={item.id}>{item.name.toUpperCase()}----{item.abreviation}</MenuItem>
                        ))
                      }
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Marca</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={brandID}
                      label="Marca"
                      onChange={(e) => setBrandID(e.target.value)}
                    >

                      {
                        brands.length > 0 &&
                        brands.map((item, index) => (
                          <MenuItem key={index} value={item.id}>{item.name.toUpperCase()}----{item.abreviation}</MenuItem>
                        ))
                      }
                    </Select>
                  </FormControl>
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
