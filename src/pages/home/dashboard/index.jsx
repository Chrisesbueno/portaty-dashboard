import React, { useState, useEffect } from "react";
import Menu from "@/components/Menu";
import styles from "@/styles/Dashboard.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button, Stack } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import ModalCategories from "@/components/ModalCategories";
import ModalBrands from "@/components/ModalBrands";
import ModalProducts from "@/components/ModalProducts";
import { TextField, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// amplify 
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { customListADCategories, customListADBrands, customListADProducts } from '@/graphql/customQueries'

import TableGrid from "@/components/TableProducts";




const Table = ({ title, data = [] }) => {

  const [searchName, setSearchName] = useState('');
  const [searchID, setSearchID] = useState('');
  const [searchAbbr, setSearchAbbr] = useState('');


  const filteredData = data.filter((item) =>
    item.id.toString().includes(searchID) &&
    item.name.toLowerCase().includes(searchName.toLowerCase()) &&
    item.image && item.abreviation.toLowerCase().includes(searchAbbr.toLocaleLowerCase())
  );

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Nombre', width: 150 },
    {
      field: 'image',
      headerName: 'Imagen',
      width: 150,
      renderCell: (params) => (<CustomImageColumn value={params.value} />),
    },
    { field: 'abreviation', headerName: 'Abreviacion', width: 150 },
    {
      // field: 'actions',
      // headerName: 'Actiones',
      // width: 110,
      // renderCell: (params) => {
      //   return (
      //     <Stack>
      //       <IconButton aria-label="delete" color="error">
      //         <DeleteIcon />
      //       </IconButton>
      //     </Stack>


      //   );
      // }
    },
  ];

  return (

    <div>
      <h3>{title}</h3>
      <Grid container justifyContent="start" spacing={1}>
        <Grid item >
          <TextField
            label="Buscar por ID"
            value={searchID}
            onChange={(e) => setSearchID(e.target.value)}
          />
        </Grid>
        <Grid item >
          <TextField
            label="Buscar por nombre"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </Grid>
        <Grid item >
          <TextField
            label="Buscar por Abreviacion"
            value={searchAbbr}
            onChange={(e) => setSearchAbbr(e.target.value)}
          />
        </Grid>
      </Grid >


      <TableGrid columns={columns} rows={filteredData} />
    </div>

  )
}

const CustomImageColumn = ({ value }) => {

  return (
    <>
      {
        typeof value === "string" ?
          <Grid container justifyContent="start" spacing={1}>
            <Grid item >
              <a target="_blank" href={value} >
                <img src={value} alt={`Image `} width={"50%"} height={40} className={styles.image} />
              </a>
            </Grid>
          </Grid >
          :
          <Grid container justifyContent="start" spacing={1}>
            {

              value.map((image, index) => (
                <Grid item key={index}>
                  <a target="_blank" href={image} >
                    <img src={image} alt={`Image ${index + 1}`} width={50} height={45} className={styles.image} />
                  </a>
                </Grid>
              ))
            }
          </Grid >
      }
    </>


  );
};

const ProductsTable = ({ title, data = [] }) => {
  const [searchName, setSearchName] = useState('');
  const [searchID, setSearchID] = useState('');

  const filteredData = data.filter((item) =>
    item.id.toString().includes(searchID) &&
    item.name.toLowerCase().includes(searchName.toLowerCase()) &&
    item.images
  );

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Nombre', width: 200 },
    {
      field: 'images',
      headerName: 'Imagenes',
      width: 200,
      renderCell: (params) => (<CustomImageColumn value={params.value} />),
    },
  ];



  return (
    <div>
      <h3>{title}</h3>
      <Grid container justifyContent="start" spacing={1}>
        <Grid item >
          <TextField
            label="Buscar por ID"
            value={searchID}
            onChange={(e) => setSearchID(e.target.value)}
          />
        </Grid>
        <Grid item >
          <TextField
            label="Buscar por nombre"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </Grid>
      </Grid >
      <TableGrid columns={columns} rows={filteredData} />
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
              Agg Categoria
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => setOpenBrands(true)}
              // startIcon={<AirportShuttleIcon />}
              endIcon={<AddIcon />}
            >
              Agg Marca
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => setOpenProducts(true)}
              // startIcon={<ConfirmationNumberIcon />}
              endIcon={<AddIcon />}
            >
              Agg Producto
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
