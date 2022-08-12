import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../../../../Components/BottomNavigation";
import Container from "../../../../../Components/Container";
import Heading from "../../../../../Components/Heading";
import SideBar from "../../../../../Components/SideBar";
import Text from "../../../../../Components/Text";
import useIsMobile from "../../../../../helpers/useIsMobile";
import logoBanco from "./Assets/banco-logo.png";
import styles from "./styles.module.scss";

export default function Opcoes() {
  const isMobile = useIsMobile({ size: 768 });

  const [opcoes, setOpcoes] = useState();

  useEffect(() => {
    getOportunidades();
  }, []);

  function getOportunidades() {
    axios
      .get(
        "https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com/test/simulation"
      )
      .then((response) => {
        console.log({ response });
        setOpcoes(response.data);
      })
      .catch((error) => {
        console.log(error, "oi 2");
        // alterar o conteudo do console log
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
              <a
                href="/oportunidades/valores/periodo"
                rel="noopener noreferrer"
              >
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
          <Link to="/oportunidades/valores/periodo">
            <Box className={styles.arrow}>
              <KeyboardBackspaceOutlinedIcon />
            </Box>
          </Link>

          <Heading fontSize={20} fontWeight={600}>
            Período
          </Heading>
        </Box>

        <Box className={styles.choiceWrapper}>
          <Text color="#000000" fontWeight={500}>
            Escolha um banco.
          </Text>
        </Box>

        <Box className={styles.contentWrapper}>
          <Box className={styles.bankWrapper}>
            <Box className={styles.infosWrapper}>
              <Box className={styles.logoBanco}>
                <img src={logoBanco} alt="Banco meutudo" />
              </Box>

              <Box className={styles.periodoWrapper}>
                <Text fontWeight={600} fontSize={14} color="#000000">
                  {opcoes?.numberOfInstallments} parcelas de
                </Text>

                <Text fontWeight={700} fontSize={18} color="#d22688">
                  {formatter.format(opcoes?.installmentValue)}
                </Text>

                <Text fontWeight={400} fontSize={14} color="#000000">
                  Total de {formatter.format(opcoes?.contractValue)}
                </Text>
              </Box>

              <Box className={styles.divider}></Box>

              <Box className={styles.juros}>
                <Text fontWeight={400} fontSize={14} color="#000000">
                  com taxa de
                </Text>

                <Text fontWeight={700} fontSize={14} color="#000000">
                  {opcoes?.rate}% a.m.
                </Text>
              </Box>
            </Box>

            <Box className={styles.revisionWrapper}>
              <Box display="flex" alignItems="center">
                <Text>Revisão de pagamento</Text>

                <div className={styles.passar_mouse}>
                  <HelpOutlineIcon />
                  <div className={styles.mostrar}>
                    A data de vencimento é: {opcoes?.fatEstimatedDate}
                  </div>
                </div>
              </Box>

              <Text fontWeight={600} color="#000000">
                {opcoes?.nearEstimatedDate} a {opcoes?.fatEstimatedDate}
              </Text>
            </Box>

            <Box className={styles.finishWrapper}>
              <Link to="/espera">Contratar</Link>
            </Box>
          </Box>
        </Box>

        {isMobile ? <Navigation /> : ""}
      </Container>
    </Box>
  );
}
