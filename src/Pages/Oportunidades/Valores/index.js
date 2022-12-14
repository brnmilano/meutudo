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

  const [value, setValue] = useState();

  useEffect(() => {
    getValores();
  }, []);

  function getValores(e) {
    axios
      .get("https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com/test/values")
      .then((response) => {
        setValores(response.data);
      })
      .catch((error) => {});
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
              <Link to="/oportunidades">
                <Box className={styles.arrow}>
                  <KeyboardBackspaceOutlinedIcon />
                </Box>
              </Link>
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
            De quanto voc?? precisa?
          </Text>
        </Box>

        <Box className={styles.valoresWrapper}>
          {valores?.suggestionValues.map((suggestionValue, index) => {
            return (
              <Button
                key={`${index} ${suggestionValue}`}
                className={styles.oportunidadesCard}
                borderRadius={10}
                padding={10}
                color="#000000"
                fontWeight={400}
                onClick={getValores}
              >
                <div onClick={() => setValue(suggestionValue)}>
                  {formatter.format(suggestionValue)}
                </div>
              </Button>
            );
          })}
        </Box>

        <Box className={styles.moreValuesWrapper}>
          <Text>Outro valor</Text>

          <NumberFormat
            placeholder="R$ 00,00"
            thousandSeparator={true}
            prefix={"R$"}
          />

          {value ? (
            <Text fontSize={18}>
              O valor escolhido ?? de: {formatter.format(value)}
            </Text>
          ) : (
            ""
          )}
        </Box>

        <Box className={styles.buttonWrapper}>
          <Link to="/oportunidades/valores/periodo">
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
