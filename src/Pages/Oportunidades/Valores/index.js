import { Box } from "@mui/system";
import Container from "../../../Components/Container";
import styles from "./styles.module.scss";
import useIsMobile from "../../../helpers/useIsMobile";
import SideBar from "../../../Components/SideBar";
import Heading from "../../../Components/Heading";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Navigation from "../../../Components/BottomNavigation";
import Text from "../../../Components/Text";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import { Link } from "react-router-dom";

export default function Valores() {
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

        <Text>De quanto você precisa?</Text>

        <Box className={styles.valoresWrapper}>
          <Box className={styles.oportunidadesCard}>
            <Text>R$300,00</Text>
          </Box>

          <Box className={styles.oportunidadesCard}>
            <Text>R$2.660,00</Text>
          </Box>
        </Box>

        <Box className={styles.valoresWrapper}>
          <Box className={styles.oportunidadesCard}>
            <Text>R$5.030,00</Text>
          </Box>

          <Box className={styles.oportunidadesCard}>
            <Text>R$7.407,93</Text>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center">
          <Text>Outro valor</Text>
          <Input
            type="number"
            name="Telefone"
            placeholder="R$ 00,00"
            required
          />
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
