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

export default function Periodo() {
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

        <Text>Em quanto tempo você quer pagar?</Text>

        <Box className={styles.valoresWrapper}>
          <Box className={styles.oportunidadesCard}>
            <Text>48 meses</Text>
          </Box>

          <Box className={styles.oportunidadesCard}>
            <Text>60 meses</Text>
          </Box>
        </Box>

        <Box className={styles.valoresWrapper}>
          <Box className={styles.oportunidadesCard}>
            <Text>72 meses</Text>
          </Box>

          <Box className={styles.oportunidadesCard}>
            <Text>84 meses</Text>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center">
          <Input type="number" name="Telefone" placeholder="00" required />
          <Text>meses</Text>
        </Box>

        <Box className={styles.buttonWrapper}>
          <Link to="/opcoes">
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
