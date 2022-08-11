import { Box } from "@mui/system";
import Container from "../../Components/Container";
import styles from "./styles.module.scss";
import useIsMobile from "../../helpers/useIsMobile";
import SideBar from "../../Components/SideBar";
import Heading from "../../Components/Heading";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { Link } from "react-router-dom";
import Text from "../../Components/Text";
import Emprestimo from "./Assets/new-loan.png";
import Portabilidade from "./Assets/portability.png";
import Refinanciamento from "./Assets/refinancing.png";
import Cartao from "./Assets/credit-card.png";
import Navigation from "../../Components/BottomNavigation";

export default function Oportunidades() {
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
              Oportunidades
            </Heading>
          </Box>
        ) : (
          <SideBar />
        )}

        <Box className={styles.headingWrapper}>
          <a href="/home" rel="noopener noreferrer">
            <Box className={styles.arrow}>
              <KeyboardBackspaceOutlinedIcon />
            </Box>
          </a>

          <Heading fontSize={20} fontWeight={600}>
            Oportunidades
          </Heading>
        </Box>

        <Box className={styles.teste}>
          <Link className={styles.oportunidadesCard} to="/valores">
            <img src={Emprestimo} alt="Empréstimo" />
            <Text>Novo empréstimo</Text>
            <Text color="#d22688" fontSize={14}>
              Até R$3.058,10
            </Text>
          </Link>

          <Link className={styles.oportunidadesCard} to="/espera">
            <img src={Portabilidade} alt="Espera" />
            <Text>Portabilidade</Text>
            <Text color="#d22688" fontSize={14}>
              Até R$2.000,00
            </Text>
          </Link>
        </Box>

        <Box className={styles.teste}>
          <Box className={styles.oportunidadesCard}>
            <img src={Refinanciamento} alt="" />
            <Text>Refinanciamento</Text>
          </Box>

          <Box className={styles.oportunidadesCard}>
            <img src={Cartao} alt="" />
            <Text>Cartão de crédito consignado</Text>
          </Box>
        </Box>

        {isMobile ? <Navigation /> : ""}
      </Container>
    </Box>
  );
}
