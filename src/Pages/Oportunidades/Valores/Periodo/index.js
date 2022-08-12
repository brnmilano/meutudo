import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../../../Components/BottomNavigation";
import Button from "../../../../Components/Button";
import Container from "../../../../Components/Container";
import Heading from "../../../../Components/Heading";
import Input from "../../../../Components/Input";
import SideBar from "../../../../Components/SideBar";
import Text from "../../../../Components/Text";
import useIsMobile from "../../../../helpers/useIsMobile";
import styles from "./styles.module.scss";

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
        setPeriodo(response.data);
      })
      .catch((error) => {});
  }

  return (
    <Box className={styles.container}>
      <Container>
        {isMobile ? (
          <Box className={styles.topBar}>
            <Box className={styles.backArrow}>
              <Link to="/oportunidades/valores">
                <Box className={styles.arrow}>
                  <KeyboardBackspaceOutlinedIcon />
                </Box>
              </Link>
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
              );
            }
          )}
        </Box>

        <Box className={styles.periodWrapper}>
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

        {isMobile && <Navigation />}
      </Container>
    </Box>
  );
}
