import { Box } from "@mui/system";
import Container from "../../../../../Components/Container";
import styles from "./styles.module.scss";
import useIsMobile from "../../../../../helpers/useIsMobile";
import SideBar from "../../../../../Components/SideBar";
import Heading from "../../../../../Components/Heading";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Navigation from "../../../../../Components/BottomNavigation";
import Text from "../../../../../Components/Text";
import Button from "../../../../../Components/Button";
import { Link } from "react-router-dom";
import logoBanco from "./Assets/banco-logo.png";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function Opcoes() {
  const isMobile = useIsMobile({ size: 768 });
  return (
    <Box className={styles.container}>
      <Container>
        {isMobile ? (
          <Box className={styles.topBar}>
            <Box className={styles.backArrow}>
              <a href="/home" rel="noopener noreferrer">
                <Box className={styles.arrow}>
                  <KeyboardBackspaceOutlinedIcon />
                </Box>
              </a>
            </Box>

            <Heading fontSize={20} fontWeight={600} color="#ffffff">
              Período
            </Heading>
          </Box>
        ) : (
          <SideBar />
        )}

        <Box className={styles.headingWrapper}>
          <Link to="/oportunidades">
            <Box className={styles.arrow}>
              <KeyboardBackspaceOutlinedIcon />
            </Box>
          </Link>

          <Heading fontSize={20} fontWeight={600}>
            Período
          </Heading>
        </Box>

        <Text>Escolha um banco.</Text>

        <Box className={styles.bankWrapper}>
          <Box className={styles.contentWrapper}>
            <Box className={styles.logoBanco}>
              <img src={logoBanco} alt="Banco meutudo" />
            </Box>

            <Box className={styles.periodoWrapper}>
              <Text fontWeight={600} fontSize={14} color="#000000">
                60 parcelas de
              </Text>

              <Text fontWeight={700} fontSize={18} color="#d22688">
                R$375,65
              </Text>

              <Text fontWeight={400} fontSize={14} color="#000000">
                Total de R$5.030,00
              </Text>
            </Box>

            <Box className={styles.divider}></Box>

            <Box className={styles.juros}>
              <Text fontWeight={400} fontSize={14} color="#000000">
                com taxa de 
              </Text>

              <Text fontWeight={700} fontSize={14} color="#000000">
                1,30% a.m.
              </Text>
            </Box>
          </Box>

          <Box className={styles.revisionWrapper}>
            <Text>Revisão de pagamento <HelpOutlineIcon /></Text>
            <Text></Text>
          </Box>
        </Box>

        <Box className={styles.buttonWrapper}>
          <Link to="/periodo">
            <Button backgroundColor="#d83c95" borderRadius={20} padding={10}>
              Continuar
            </Button>
          </Link>
        </Box>

        {isMobile ? <Navigation /> : ""}
      </Container>
    </Box>
  );
}
