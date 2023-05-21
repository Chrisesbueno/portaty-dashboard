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
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
// amplify 
import { Auth, API, graphqlOperation, Storage } from 'aws-amplify'
import { listADCategories, listADBrands, listADProducts } from '@/graphql/queries'
import { customListADCategories, customListADBrands, customListADProducts } from '@/graphql/customQueries'
import { onCreateADCategory, onCreateADProduct, onCreateADBrand } from '@/graphql/subscriptions'
import TableGrid from "@/components/TableProducts";

const Table = ({ title, data = [] }) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Nombre', width: 150 },
    { field: 'image', headerName: 'Imagen', width: 300 },
    {
      field: 'actions',
      headerName: 'Actiones',
      width: 110,
      renderCell: (params) => {
        return (
          <Stack>
            <IconButton aria-label="delete" color="error">
              <DeleteIcon />
            </IconButton>
          </Stack>
        );
      }
    },
  ];

  return (

    <div>
      <h3>{title}</h3>
      <TableGrid columns={columns} rows={data} />
    </div>

  )
}

const ProductsTable = ({ title, data = [] }) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'name', headerName: 'Nombre', width: 200 },
    { field: 'images', headerName: 'Imagenes', width: 200 },
    {
      field: 'actions',
      headerName: 'Actiones',
      width: 110,
      renderCell: (params) => {
        return (
          <Stack>
            <IconButton aria-label="delete" color="error">
              <DeleteIcon />
            </IconButton>
          </Stack>
        );
      }
    },
  ];
  return (
    <div>
      <h3>{title}</h3>
      <TableGrid columns={columns} rows={data} />
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
    const dataCategories = await API.graphql(graphqlOperation(customListADCategories))
    const dataBrands = await API.graphql(graphqlOperation(customListADBrands));
    const dataProducts = await API.graphql(graphqlOperation(customListADProducts));

    setCategories(dataCategories)
    setBrands(dataBrands)
    setProducts(dataProducts)
  };

  useEffect(() => {
    if (!openCategories && !openBrands && !openProducts) fecthShop()
  }, [openCategories, openBrands, openProducts])

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
              // startIcon={<StoreIcon />}
              endIcon={<AddIcon />}
            >
              Add new category
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => setOpenBrands(true)}
              // startIcon={<AirportShuttleIcon />}
              endIcon={<AddIcon />}
            >
              Add new brand
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => setOpenProducts(true)}
              // startIcon={<ConfirmationNumberIcon />}
              endIcon={<AddIcon />}
            >
              Add new product
            </Button>
            <ModalCategories open={openCategories} close={() => setOpenCategories(false)} />
            <ModalBrands open={openBrands} close={() => setOpenBrands(false)} />
            <ModalProducts open={openProducts} close={() => setOpenProducts(false)} />
          </div>
          <Table title={"Categoria"} data={categories?.data?.listADCategories?.items} />
          <Table title={"Marcas"} data={brands?.data?.listADBrands?.items} />
          <ProductsTable title={"Productos"} data={products?.data?.listADProducts?.items} />
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
