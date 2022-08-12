import { Box } from "@mui/system";
import Button from "../../Components/Button";
import Container from "../../Components/Container";
import Heading from "../../Components/Heading";
import useIsMobile from "../../helpers/useIsMobile";
import Logo from "./Assets/logo.png";
import styles from "./styles.module.scss";

export default function BemVindo() {
  const isMobile = useIsMobile({ size: 768 });

  return (
    <Box className={styles.container}>
      <Container>
        <img className={styles.logoImage} src={Logo} alt="Logo meutudo" />

        <Heading fontSize={isMobile ? 22 : 32} color="#ffffff">Seja muito bem vindo a meutudo.</Heading>

        <Box className={styles.buttonWrapper}>
          <a href="/home" rel="noopener noreferrer">
            <Button backgroundColor="#d83c95" borderRadius={10} padding={10}>
              Entrar
            </Button>
          </a>
        </Box>
      </Container>
    </Box>
  );
}
