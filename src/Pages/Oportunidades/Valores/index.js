import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import Navigation from "../../../Components/BottomNavigation";
import Button from "../../../Components/Button";
import Container from "../../../Components/Container";
import Heading from "../../../Components/Heading";
import SideBar from "../../../Components/SideBar";
import Text from "../../../Components/Text";
import useIsMobile from "../../../helpers/useIsMobile";
import styles from "./styles.module.scss";

export default function Valores() {
  const isMobile = useIsMobile({ size: 768 });

  const [valores, setValores] = useState();

  useEffect(() => {
    getValores();
  }, []);

  function getValores() {
    axios
      .get("https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com/test/values")
      .then((response) => {
        console.log({ response });
        setValores(response.data);
      })
      .catch((error) => {
        console.log(error, "oi 2");
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
              <a href="/oportunidades" rel="noopener noreferrer">
                <Box className={styles.arrow}>
                  <KeyboardBackspaceOutlinedIcon />
                </Box>
              </a>
            </Box>

            <Heading fontSize={20} fontWeight={600} color="#ffffff">
              Valores
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
            Valores
          </Heading>
        </Box>

        <Box className={styles.choiceWrapper}>
          <Text color="#000000" fontWeight={500}>
            De quanto você precisa?
          </Text>
        </Box>

        <Box className={styles.valoresWrapper}>
          {valores?.suggestionValues.map((suggestionValue, index) => {
            return (
              <Box
                key={`${index} ${suggestionValue}`}
                className={styles.oportunidadesCard}
              >
                <Button color="#000000" fontWeight={400} onClick={getValores}>
                  {formatter.format(suggestionValue)}
                </Button>
              </Box>
            );
          })}
        </Box>

        <Box className={styles.moreValuesWrapper}>
          <Text>Outro valor</Text>

          <NumberFormat placeholder="R$ 00,00" thousandSeparator={true} prefix={"R$"} />
        </Box>

        <Box className={styles.buttonWrapper}>
          <Link to="/oportunidades/valores/periodo">
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
