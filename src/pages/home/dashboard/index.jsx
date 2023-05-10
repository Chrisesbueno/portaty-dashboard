import React, { useState } from "react";
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

const Dashboard = () => {
  const router = useRouter();
  let route = router.pathname.split("/");
  const [openCategories, setOpenCategories] = useState(false);
  const [openBrands, setOpenBrands] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
