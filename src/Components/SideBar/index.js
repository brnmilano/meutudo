import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Text from "../Text";
import Logo from "./Assets/logo.png";
import styles from "./styles.module.scss";

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

            <Link to="/home">
              <Text fontWeight={500} fontSize={14}>
                Home
              </Text>
            </Link>
          </Box>

          <Box className={styles.menuItems}>
            <LibraryBooksOutlinedIcon />

            <Link to="/contratos">
              <Text fontWeight={500} fontSize={14}>
                Contratos
              </Text>
            </Link>
          </Box>

          <Box className={styles.menuItems}>
            <HelpOutlineOutlinedIcon />

            <Link to="/duvidas">
              <Text fontWeight={500} fontSize={14}>
                Dúvidas
              </Text>
            </Link>
          </Box>

          <Box className={styles.menuItems}>
            <PersonOutlineOutlinedIcon />

            <Link to="/conta">
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
