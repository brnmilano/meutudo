import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../Components/BottomNavigation";
import Container from "../../Components/Container";
import Heading from "../../Components/Heading";
import SideBar from "../../Components/SideBar";
import Text from "../../Components/Text";
import useIsMobile from "../../helpers/useIsMobile";
import Cartao from "./Assets/credit-card.png";
import Emprestimo from "./Assets/new-loan.png";
import Portabilidade from "./Assets/portability.png";
import Refinanciamento from "./Assets/refinancing.png";
import styles from "./styles.module.scss";

function Oportunidades() {
  const isMobile = useIsMobile({ size: 768 });

  const [oportunidades, setOportunidades] = useState();

  useEffect(() => {
    getOportunidades();
  }, []);

  function getOportunidades() {
    axios
      .get("https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com/test")
      .then((response) => {
        console.log({ response });
        setOportunidades(response.data);
      })
      .catch((error) => {
        console.log(error, "Teste de erro");
      });
  }

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

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

        <Box className={styles.oportunidadesWrapper}>
          <Link
            onClick={getOportunidades}
            className={styles.oportunidadesCard}
            to="/oportunidades/valores"
          >
            <img src={Emprestimo} alt="Empréstimo" />

            <Text fontSize={isMobile ? 14 : 16}>Novo empréstimo</Text>

            <Text color="#d22688" fontSize={isMobile ? 14 : 16}>
              Até {formatter.format(oportunidades?.newLoanMaxValue)}
            </Text>
          </Link>

          <Link
            onClick={getOportunidades}
            className={styles.oportunidadesCard}
            to="/espera"
          >
            <img src={Portabilidade} alt="Espera" />

            <Text fontSize={isMobile ? 14 : 16}>Portabilidade</Text>

            <Text color="#d22688" fontSize={isMobile ? 14 : 16}>
              Até {formatter.format(oportunidades?.portabilityMaxValue)}
            </Text>
          </Link>
        </Box>

        <Box className={styles.oportunidadesWrapper}>
          <Box className={styles.oportunidadesCard}>
            <img src={Refinanciamento} alt="Refinanciamento" />

            <Text fontSize={isMobile ? 14 : 16}>Refinanciamento</Text>
          </Box>

          <Box className={styles.oportunidadesCard}>
            <img src={Cartao} alt="Cartão de crédito consignado" />

            <Text fontSize={isMobile ? 14 : 16}>
              Cartão de crédito consignado
            </Text>
          </Box>
        </Box>

        {isMobile ? <Navigation /> : ""}
      </Container>
    </Box>
  );
}

export default Oportunidades;
