import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Heading from "../../../Components/Heading";
import Text from "../../../Components/Text";
import styles from "./styles.module.scss";

export default function MoreInfos() {
  return (
    <Box className={styles.container}>
      <Box className={styles.moreInfos}>
        <Box>
          <PersonOutlineOutlinedIcon />
          <Heading fontSize={16}>Conta</Heading>
        </Box>

        <Box className={styles.contentWrapper}>
          <Link to="/espera">
            <Text fontWeight={300} fontSize={16} color="#000000">
              Editar endereço
            </Text>

            <Box className={styles.arrow}>
              <KeyboardArrowRightOutlinedIcon />
            </Box>
          </Link>

          <Link to="/espera">
            <Text fontWeight={300} fontSize={16} color="#000000">
              Dados Bancários
            </Text>

            <Box className={styles.arrow}>
              <KeyboardArrowRightOutlinedIcon />
            </Box>
          </Link>
        </Box>
      </Box>

      <Box className={styles.moreInfos}>
        <Box>
          <AdminPanelSettingsOutlinedIcon />
          <Heading fontSize={16}>Segurança</Heading>
        </Box>

        <Box className={styles.contentWrapper}>
          <Link to="/espera">
            <Text fontWeight={300} fontSize={16} color="#000000">
              Alterar senha
            </Text>

            <Box className={styles.arrow}>
              <KeyboardArrowRightOutlinedIcon />
            </Box>
          </Link>
        </Box>
      </Box>

      <Box className={styles.moreInfos}>
        <Box>
          <InfoOutlinedIcon />
          <Heading fontSize={16}>Informações</Heading>
        </Box>

        <Box className={styles.contentWrapper}>
          <Link to="/espera">
            <Text fontWeight={300} fontSize={16} color="#000000">
              Política de privacidade
            </Text>

            <Box className={styles.arrow}>
              <KeyboardArrowRightOutlinedIcon />
            </Box>
          </Link>

          <Link to="/espera">
            <Text fontWeight={300} fontSize={16} color="#000000">
              Termos de uso
            </Text>

            <Box className={styles.arrow}>
              <KeyboardArrowRightOutlinedIcon />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
