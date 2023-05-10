import * as React from "react";
import Modal from "@mui/material/Modal";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import styles from "@/styles/Modal.module.css";
import { useState } from "react";

export default function ModalBrands({ open, close }) {
  const [category, setCategory] = useState('');
  const [product, setProduct] = useState('');

  const handleCategories = (event) => {
    setCategory(event.target.value);
  };
  const handleProduct = (event) => {
    setProduct(event.target.value);
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
                    label="Name"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    // label="Image"
                    type='file'
                    variant="outlined"
                  />
                </div>
                <div className={styles.input}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={category}
                      label="Category"
                      onChange={handleCategories}
                    >
                      <MenuItem value={'Apple'}>Phone</MenuItem>
                      <MenuItem value={'Microsoft'}>Laptop</MenuItem>
                      <MenuItem value={'TLC'}>Watches</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Product</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={product}
                      label="Product"
                      onChange={handleProduct}
                    >
                      <MenuItem value={'Apple'}>Iphone 10</MenuItem>
                      <MenuItem value={'Microsoft'}>Iphone 11</MenuItem>
                      <MenuItem value={'TLC'}>Iphone 12</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>

            <div className={styles.buttons}>
              <Button variant="contained" size="large">
                Register
              </Button>
              <Button
                variant="contained"
                size="large"
                color="error"
                onClick={close}
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
