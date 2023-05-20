import React, { useState, useEffect } from "react";
import Menu from "@/components/Menu";
import styles from "@/styles/Dashboard.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button, Stack } from "@mui/material";
import Card from "@/components/Card";
import StoreIcon from "@mui/icons-material/Store";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import AddIcon from "@mui/icons-material/Add";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ModalCategories from "@/components/ModalCategories";
import ModalBrands from "@/components/ModalBrands";
import ModalProducts from "@/components/ModalProducts";
import { TextField } from '@mui/material';
// amplify 
import { Auth, API, graphqlOperation, Storage } from 'aws-amplify'
import { listADCategories, listADBrands, listADProducts } from '@/graphql/queries'
import { onCreateADCategory, onCreateADProduct, onCreateADBrand } from '@/graphql/subscriptions'
import TableProducts from "@/components/TableProducts";

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

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'images',
      headerName: 'Images',
      width: 110,
      renderCell: (params) => {
        return (
          <Stack>
            <img src="" alt="" />
          </Stack>
        );
      }
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 110,
      renderCell: (params) => {
        return (
          <Stack>
            <button>{params.value.eliminated}</button>
          </Stack>
        );
      }
    },
  ];

  const rows = [
    { id: 1, name: 'Redmi Note 10', actions: {eliminated: 'Eliminated'}},
    { id: 2, name: 'Redmi Note 10', actions: {eliminated: 'Eliminated'}},
    { id: 3, name: 'Redmi Note 10', actions: {eliminated: 'Eliminated'}},
    { id: 4, name: 'Redmi Note 10', actions: {eliminated: 'Eliminated'}},
    { id: 5, name: 'Redmi Note 10', actions: {eliminated: 'Eliminated'}},
    { id: 6, name: 'Redmi Note 10', actions: {eliminated: 'Eliminated'}},
    { id: 7, name: 'Redmi Note 10', actions: {eliminated: 'Eliminated'}},
  ];

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

     <TableProducts columns={columns} rows={rows} />
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
  const [brands, setBrands] = useState([])
  const [products, setProducts] = useState([])

  const fecthShop = async () => {
    const listCategories = await API.graphql(graphqlOperation(listADCategories));
    const listBrands = await API.graphql(graphqlOperation(listADBrands));
    const listProducts = await API.graphql(graphqlOperation(listADProducts));
    console.log('categories', listCategories)
    console.log('brands', listBrands)
    console.log('products', listProducts)
  };

  useEffect(() => {
    fecthShop()
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

    const checkUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();

      } catch (error) {
        router.push({ pathname: `/` })
      }
    }
    checkUser();
  }, [router])

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
