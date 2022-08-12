import { Box } from "@mui/system";
import Container from "../../../../Components/Container";
import styles from "./styles.module.scss";
import useIsMobile from "../../../../helpers/useIsMobile";
import SideBar from "../../../../Components/SideBar";
import Heading from "../../../../Components/Heading";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Navigation from "../../../../Components/BottomNavigation";
import Text from "../../../../Components/Text";
import Input from "../../../../Components/Input";
import Button from "../../../../Components/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Periodo() {
  const isMobile = useIsMobile({ size: 768 });

  const [periodo, setPeriodo] = useState();

  useEffect(() => {
    getValores();
  }, []);

  function getValores() {
    axios
      .get(
        "https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com/test/installments"
      )
      .then((response) => {
        console.log({ response });
        setPeriodo(response.data);
      })
      .catch((error) => {
        console.log(error, "oi 2");
        // alterar o conteudo do console log
      });
  }

  return (
    <Box className={styles.container}>
      <Container>
        {isMobile ? (
          <Box className={styles.topBar}>
            <Box className={styles.backArrow}>
              <a href="/oportunidades/valores" rel="noopener noreferrer">
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
          <Link to="/oportunidades/valores">
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
            Em quanto tempo você quer pagar?
          </Text>
        </Box>

        <Box className={styles.valoresWrapper}>
          {periodo?.suggestionInstallments.map(
            (suggestionInstallment, index) => {
              return (
                <Box className={styles.teste}>
                  <Button
                    color="#000000"
                    fontWeight={400}
                    borderRadius={10}
                    padding={10}
                    onClick={getValores}
                    key={`${index} ${suggestionInstallment}`}
                    className={styles.oportunidadesCard}
                  >
                    {suggestionInstallment}
                  </Button>
                </Box>
              );
            }
          )}
        </Box>

        <Box display="flex" justifyContent="center">
          <Input type="number" name="Telefone" placeholder="00" required />
          <Text>meses</Text>
        </Box>

        <Box className={styles.buttonWrapper}>
          <Link to="/oportunidades/valores/periodo/opcoes">
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
