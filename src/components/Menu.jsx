import React, { useState } from "react";
import styles from "@/styles/Menu.module.css";
import {
  List,
  ListItemText,
  ListItemButton,
  Collapse,
  Divider,
  ListItemIcon,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Image from "next/image";
import { menu } from "@/constants";
import { useRouter } from "next/navigation";
import { useMenu } from "@/context/MenuContext";

const Menu = () => {
  const { updateIndex, selectedIndex } = useMenu();
  const router = useRouter();
  const [openShops, setOpenShops] = useState(true);
  const [openUsers, setOpenUsers] = useState(true);
  const [openProducts, setOpenProducts] = useState(true);
  const [openNotifications, setOpenNotifications] = useState(true);

  const handleProducts = () => {
    setOpenUsers(!openProducts);
  };
  const handleShops = () => {
    setOpenShops(!openShops);
  };
  const handleUsers = () => {
    setOpenUsers(!openUsers);
  };
  const handleNotifications = () => {
    setOpenNotifications(!openNotifications);
  };

  return (
    <div className={styles.menu}>
      <div className={styles.logo}>
        <Image src={menu.image} alt="" />
      </div>
      <List
        sx={{
          width: "100%",
          padding: 0,
          border: "1px solid rgba(0, 0, 0, 0.14)",
          borderRadius: "8px",
          color: "#1e1e1e",
          "&& .Mui-selected, && .Mui-selected:hover": {
            bgcolor: "#1e1e1e",
            color: "#fff",
          },
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton
          sx={{ borderTopLeftRadius: "7px", borderTopRightRadius: "7px" }}
          selected={selectedIndex === 0}
          onClick={(e) => {
            e.preventDefault;
            router.push("/home/dashboard");
            updateIndex(0);
            console.log(selectedIndex);
          }}
        >
          <ListItemIcon>
            <DashboardIcon sx={{ color: selectedIndex === 0 ? 'white' : 'rgba(0, 0, 0, 0.54)' }}/>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <Divider sx={{ bgcolor: "rgba(0, 0, 0, 0.04)" }} />


        <ListItemButton onClick={handleShops}>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText sx={{
            marginLeft: -3 
          }}   primary="Shops" />
          {openShops ? <ExpandLessIcon sx={{ color: 'rgba(0, 0, 0, 0.54)'}} /> : <ExpandMoreIcon sx={{ color: 'rgba(0, 0, 0, 0.54)'}}/>}
        </ListItemButton>
        <Collapse in={openShops} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Divider
              sx={{ width: "93%", position: "relative", right: "-7%" }}
            />
            <ListItemButton
              sx={{
                pl: 4,
                width: "81%",
                position: "relative",
                right: "-19%",
                borderTopLeftRadius: "7px",
                borderBottomLeftRadius: "7px",
              }}
              selected={selectedIndex === 1}
              onClick={(e) => {
                e.preventDefault;
                router.push(`/home/shops/panel`);
                updateIndex(1);
                console.log(selectedIndex);
              }}
            >
              <ListItemText primary="Panel" />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider sx={{ bgcolor: "rgba(0, 0, 0, 0.04)" }} />

        

        <ListItemButton onClick={handleUsers}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText sx={{
            marginLeft: -3 
          }} primary="Users" />
          {openUsers ? <ExpandLessIcon sx={{ color: 'rgba(0, 0, 0, 0.54)'}}/> : <ExpandMoreIcon sx={{ color: 'rgba(0, 0, 0, 0.54)'}}/>}
        </ListItemButton>
        <Collapse in={openUsers} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Divider
              sx={{ width: "93%", position: "relative", right: "-7%" }}
            />

            <ListItemButton
              sx={{
                pl: 4,
                width: "81%",
                position: "relative",
                right: "-19%",
                borderTopLeftRadius: "7px",
                borderBottomLeftRadius: "7px",
              }}
              selected={selectedIndex === 5}
              onClick={(e) => {
                e.preventDefault;
                router.push(`/home/users/panel`);
                updateIndex(5);
                console.log(selectedIndex);
              }}
            >
              <ListItemText primary="Panel" />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider sx={{ bgcolor: "rgba(0, 0, 0, 0.04)" }} />
        

        <ListItemButton onClick={handleNotifications}>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText sx={{
            marginLeft: -3 
          }} primary="Notifications" />
          {openNotifications ? <ExpandLessIcon sx={{ color: 'rgba(0, 0, 0, 0.54)'}}/> : <ExpandMoreIcon sx={{ color: 'rgba(0, 0, 0, 0.54)'}}/>}
        </ListItemButton>
        <Collapse in={openNotifications} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Divider
              sx={{ width: "93%", position: "relative", right: "-7%" }}
            />

            <ListItemButton
              sx={{
                pl: 4,
                width: "81%",
                position: "relative",
                right: "-19%",
                borderTopLeftRadius: "7px",
                borderBottomLeftRadius: "7px",
              }}
              selected={selectedIndex === 7}
              onClick={(e) => {
                e.preventDefault;
                router.push(`/home/notifications/panel`);
                updateIndex(7);
                console.log(selectedIndex);
              }}
            >
              <ListItemText primary="Panel" />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider sx={{ bgcolor: "rgba(0, 0, 0, 0.04)" }} />


        <ListItemButton
          sx={{ borderBottomLeftRadius: "7px", borderBottomRightRadius: "7px" }}
          selected={selectedIndex === 8}
          onClick={(e) => {
            e.preventDefault;
            router.push("/home/configuration");
            updateIndex(8);
            console.log(selectedIndex);
          }}
        >
          <ListItemIcon>
            <SettingsIcon sx={{ color: selectedIndex === 8 ? 'white' : 'rgba(0, 0, 0, 0.54)' }}/>
          </ListItemIcon>
          <ListItemText sx={{
            marginLeft: -3 
          }} primary="Configuration" />
        </ListItemButton>
      </List>
      <div className={styles.panel}>
        
      </div>
    </div>
  );
};

export default Menu;
