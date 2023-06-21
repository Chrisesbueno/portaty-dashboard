import React, { useState } from "react";
import Menu from "@/components/Menu";
import styles from "@/styles/Home.module.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ModalNotifications from "@/components/ModalNotifications";
import Link from "next/link";
import { DataGrid } from '@mui/x-data-grid';

const NotificationsPanel = () => {
  const [openNotifications, setOpenNotifications] = useState(false);
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'text', headerName: 'Texto', width: 450 },
    { field: 'type', headerName: 'Tipo', width: 150 },
  ];
  
  const rows = [
    { id: 1, text: 'Hola %user%, tenemos nuevas ofertas en telefonos :D', type: 'Global' },
    { id: 2, text: 'Hola %user%, compraste un producto %info%', type: 'Compra' },
    { id: 3, text: 'Hola %user%, se ha vendido tu producto %info%', type: 'Venta' },
    { id: 4, text: 'Hola %user%, te enviamos los detalles de %info% %date%', type: 'Ordenes' },
  ];
  
  return (
    <div className={styles.content}>
      <Menu />
      <div className="section">
        <Button
          variant="contained"
          size="large"
          onClick={() => setOpenNotifications(true)}
          // startIcon={<StoreIcon />}
          endIcon={<AddIcon />}
        >
          Agg Notificacion
        </Button>
        <ModalNotifications open={openNotifications} close={() => setOpenNotifications(false)} />
        <DataGrid
        sx={{
          height: 400,
          marginTop: 10
        }}
        rows={rows}
        columns={columns}
        paginationModel={{ page: 0, pageSize: 10 }}
        checkboxSelection
      />
      </div>
    </div>
  );
};

export default NotificationsPanel;
