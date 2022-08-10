import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import styles from "./styles.module.scss";
import { Link } from 'react-router-dom';


export default function Navigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className={styles.container}>
      <BottomNavigation
      
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction classes={{ selected: styles.active}} component={Link} to="/home" value="home" label="Home" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction classes={{ selected: styles.active}} component={Link} to="/contratos" value="contratos" label="Contratos" icon={<LibraryBooksOutlinedIcon />} />
        <BottomNavigationAction classes={{ selected: styles.active}} component={Link} to="/duvidas" value="duvidas" label="Dúvidas" icon={<HelpOutlineOutlinedIcon />} />
        <BottomNavigationAction classes={{ selected: styles.active}} component={Link} to="/conta" value="conta" label="Conta" icon={<PersonOutlineOutlinedIcon />} />
      </BottomNavigation>
    </Box>
  );
}
