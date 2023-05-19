import React, { useState, useEffect } from "react";
import Menu from "@/components/Menu";
import styles from "@/styles/Dashboard.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@mui/material";
import Card from "@/components/Card";
import StoreIcon from "@mui/icons-material/Store";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import AddIcon from "@mui/icons-material/Add";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ModalCategories from "@/components/ModalCategories";
import ModalBrands from "@/components/ModalBrands";
import ModalProducts from "@/components/ModalProducts";
import { TextField, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
// amplify 
import { Auth, API, graphqlOperation, Storage } from 'aws-amplify'
import { listADCategories, listADBrands, listADProducts } from '@/graphql/queries'
import { onCreateADCategory, onCreateADProduct, onCreateADBrand } from '@/graphql/subscriptions'



const TablesInformation = ({ title, information }) => {
  console.log("INFORMATION: ", information)
  // search 
  const [searchId, setSearchId] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchDescription, setSearchDescription] = useState('');

  // function search 
  const handleSearchIdChange = (event) => {
    setSearchId(event.target.value);
  };

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleSearchDescriptionChange = (event) => {
    setSearchDescription(event.target.value);
  };
  const filteredProducts = () => {
    if (!information.length > 0) return
    return information.filter((product) =>
      product.id.toString().includes(searchId) &&
      product.name.toLowerCase().includes(searchName.toLowerCase()) &&
      product.description.toLowerCase().includes(searchDescription.toLowerCase())
    );

  }
  return (

    <div>
      <h3>{title}</h3>
      <TextField
        label="Buscar por ID"
        value={searchId}
        onChange={handleSearchIdChange}
      />
      <TextField
        label="Buscar por nombre"
        value={searchName}
        onChange={handleSearchNameChange}
      />
      <TextField
        label="Buscar por imagen"
        value={searchDescription}
        onChange={handleSearchDescriptionChange}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Imagen</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {information.length > 0 && filteredProducts(information).map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.image}</TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  )
}

const Dashboard = () => {
  const router = useRouter();
  let route = router.pathname.split("/");
  const [openCategories, setOpenCategories] = useState(false);
  const [openBrands, setOpenBrands] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);



  // list Products
  const [categories, setCategories] = useState([])
  const [brands, setBrands] = useState(undefined)
  const [products, setProducts] = useState(undefined)




  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();

      } catch (error) {
        router.push({ pathname: `/` })
      }
    }

    checkUser();
  }, [router])

  useEffect(() => {
    fecthCategories();
    const susbcriptionCategory = API.graphql(graphqlOperation(onCreateADCategory)).subscribe({
      next: (event) => {
        // console.log(event)
      },
      error: (error) => {
        console.error('Error al suscribirse a los cambios:', error);
      }
    })

    return () => {
      susbcriptionCategory.unsubscribe()
    }
  }, [])





  const susbcriptionBrand = () => {

  }
  const susbcriptionProduct = () => {

  }

  const fecthCategories = () => API.graphql(graphqlOperation(listADCategories)).then((e) => setCategories(e.data.listADCategories.items))
  const fecthBrands = () => API.graphql(graphqlOperation(listADBrands)).then((e) => setBrands(e.data.listADBrands.items))
  const fecthProducts = () => API.graphql(graphqlOperation(listADProducts)).then((e) => setProducts(e.data.listADProducts.items))
  return (
    <div className={styles.content}>
      <Menu />
      <div className="container section">
        <div className={styles.pages}>
          <div className={styles.navbar}>
            <Link href={`/home/dashboard`}>
              {route[2] === "dashboard" ? "Dashboard" : "no"}
            </Link>
          </div>
          <div className={styles.panel}>
            <Button
              variant="contained"
              size="large"
              onClick={() => setOpenCategories(true)}
              startIcon={<StoreIcon />}
              endIcon={<AddIcon />}
            >
              Add new category
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => setOpenBrands(true)}
              startIcon={<AirportShuttleIcon />}
              endIcon={<AddIcon />}
            >
              Add new brand
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => setOpenProducts(true)}
              startIcon={<ConfirmationNumberIcon />}
              endIcon={<AddIcon />}
            >
              Add new product
            </Button>
            <ModalCategories open={openCategories} close={() => setOpenCategories(false)} />
            <ModalBrands open={openBrands} close={() => setOpenBrands(false)} />
            <ModalProducts open={openProducts} close={() => setOpenProducts(false)} />
          </div>
          <TablesInformation title={"Categoria"} information={categories} />
          <TablesInformation title={"Marcas"} information={brands} />
          <TablesInformation title={"Productos"} information={products} />
        </div>

        <Button
          variant="contained"
          size="large"
          onClick={() => Auth.signOut()}
        >
          Cerrar Sesion
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
