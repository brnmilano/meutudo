import styles from "./styles.module.scss";
import { Box } from "@mui/system";
import Logo from "./Assets/logo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Text from "../Text";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <Box className={styles.container}>
      <Box className={styles.sideBar}>
        <Box>
          <img className={styles.logoImage} src={Logo} alt="Logo meutudo" />
        </Box>

        <Box className={styles.menuWrapper}>
          <Box className={styles.menuItems}>
            <HomeOutlinedIcon />

            <Link to="/home" rel="noopener noreferrer">
              <Text fontWeight={500} fontSize={14}>
                Home
              </Text>
            </Link>
          </Box>

          <Box className={styles.menuItems}>
            <LibraryBooksOutlinedIcon />
            <Link to="/contratos" rel="noopener noreferrer">
              <Text fontWeight={500} fontSize={14}>
                Contratos
              </Text>
            </Link>
          </Box>

          <Box className={styles.menuItems}>
            <HelpOutlineOutlinedIcon />
            <Link to="/duvidas" rel="noopener noreferrer">
              <Text fontWeight={500} fontSize={14}>
                Dúvidas
              </Text>
            </Link>
          </Box>

          <Box className={styles.menuItems}>
            <PersonOutlineOutlinedIcon />
            <Link to="/conta" rel="noopener noreferrer">
              <Text fontWeight={500} fontSize={14}>
                Conta
              </Text>
            </Link>
          </Box>
        </Box>

        <Box className={styles.buttonLogout}>
          <Button href="/">Sair</Button>
        </Box>
      </Box>
    </Box>
  );
}
