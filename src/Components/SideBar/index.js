import styles from "./styles.module.scss";
import { Box } from "@mui/system";
import Logo from "./Assets/logo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Text from "../Text";
import Button from "@mui/material/Button";

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

            <a href="/home" rel="noopener noreferrer">
              <Text fontWeight={500} fontSize={14}>
                Home
              </Text>
            </a>         
          </Box>

          <Box className={styles.menuItems}>
            <LibraryBooksOutlinedIcon />
            <a href="/contratos" rel="noopener noreferrer">
              <Text fontWeight={500} fontSize={14}>
                Contratos
              </Text>
            </a>
          </Box>

          <Box className={styles.menuItems}>
            <HelpOutlineOutlinedIcon />
            <a href="/duvidas" rel="noopener noreferrer">
              <Text fontWeight={500} fontSize={14}>
                Dúvidas
              </Text>
            </a>
          </Box>

          <Box className={styles.menuItems}>
            <PersonOutlineOutlinedIcon />
            <a href="/conta" rel="noopener noreferrer">
              <Text fontWeight={500} fontSize={14}>
                Conta
              </Text>
            </a>
          </Box>
        </Box>

        <Box className={styles.buttonLogout}>
          <Button href="#">Sair</Button>
        </Box>
      </Box>
    </Box>
  );
}
