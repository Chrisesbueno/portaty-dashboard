import * as React from "react";
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
import { useState } from "react";
// amplify

export default function ModalNotifications({ open, close }) {
  const [type, setType] = useState("");
  const onHandleClose = () => {
    close();
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
                <h2>Registrar una nueva notificacion</h2>
              </div>
              <div className={styles.inputs}>
                <TextField
                  id="outlined-basic"
                  label="Texto"
                  variant="outlined"
                  multiline
                  rows={3}
                  maxRows={3}
                />

                <div className={styles.input}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={type}
                      label="Tipo"
                      onChange={(e) => setType(e.target.value)}
                    >
                      <MenuItem value={1}>Global</MenuItem>
                      <MenuItem value={2}>Compra</MenuItem>
                      <MenuItem value={3}>Orden</MenuItem>
                      <MenuItem value={3}>Venta</MenuItem>
                      <MenuItem value={3}>Favoritos</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div>
                  <h3 className={styles.legendTitle}>Leyendas</h3>
                  <p className={styles.legendInfo}>
                    Colocar cuando se quiera introducir dinamicamente algun
                    valor desde la base de datos
                  </p>
                  <p className={styles.legendValors}>
                    %user% = Nombre de usuario
                  </p>
                  <p className={styles.legendValors}>%date% = Fecha</p>
                  <p className={styles.legendValors}>
                    %data% = Informacion perteneciente al grupo
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.buttons}>
              <Button variant="contained" size="large">
                Guardar
              </Button>
              <Button
                variant="contained"
                size="large"
                color="error"
                onClick={onHandleClose}
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
