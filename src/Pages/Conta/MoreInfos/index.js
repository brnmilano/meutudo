import Box from "@mui/material/Box";
import styles from "./styles.module.scss";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Heading from "../../../Components/Heading";
import Text from "../../../Components/Text";

export default function MoreInfos() {
  return (
    <Box className={styles.container}>
      <Box className={styles.moreInfos}>
        <Box>
          <PersonOutlineOutlinedIcon />
          <Heading fontSize={16}>Conta</Heading>
        </Box>

        <Box className={styles.contentWrapper}>
          <a href="/espera" rel="noopener noreferrer">
            <Text fontWeight={300} fontSize={16} color="#000000">
              Editar endereço
            </Text>

            <Box className={styles.arrow}>
              <KeyboardArrowRightOutlinedIcon />
            </Box>
          </a>

          <a href="/espera" rel="noopener noreferrer">
            <Text fontWeight={300} fontSize={16} color="#000000">
              Dados Bancários
            </Text>

            <Box className={styles.arrow}>
              <KeyboardArrowRightOutlinedIcon />
            </Box>
          </a>
        </Box>
      </Box>

      <Box className={styles.moreInfos}>
        <Box>
          <AdminPanelSettingsOutlinedIcon />
          <Heading fontSize={16}>Segurança</Heading>
        </Box>

        <Box className={styles.contentWrapper}>
          <a href="/espera" rel="noopener noreferrer">
            <Text fontWeight={300} fontSize={16} color="#000000">
              Alterar senha
            </Text>

            <Box className={styles.arrow}>
              <KeyboardArrowRightOutlinedIcon />
            </Box>
          </a>
        </Box>
      </Box>

      <Box className={styles.moreInfos}>
        <Box>
          <InfoOutlinedIcon />
          <Heading fontSize={16}>Informações</Heading>
        </Box>

        <Box className={styles.contentWrapper}>
          <a href="/espera" rel="noopener noreferrer">
            <Text fontWeight={300} fontSize={16} color="#000000">
              Política de privacidade
            </Text>

            <Box className={styles.arrow}>
              <KeyboardArrowRightOutlinedIcon />
            </Box>
          </a>

          <a href="/espera" rel="noopener noreferrer">
            <Text fontWeight={300} fontSize={16} color="#000000">
              Termos de uso
            </Text>

            <Box className={styles.arrow}>
              <KeyboardArrowRightOutlinedIcon />
            </Box>
          </a>
        </Box>
      </Box>
    </Box>
  );
}
