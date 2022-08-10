import Box from "@mui/material/Box";
import Container from "../../Components/Container";
import Heading from "../../Components/Heading";
import styles from "./styles.module.scss";
import Text from "../../Components/Text";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import SideBar from "../../Components/SideBar";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Navigation from "../../Components/BottomNavigation";
import useIsMobile from "../../helpers/useIsMobile";

export default function Duvidas() {
  const isMobile = useIsMobile({ size: 768 });

  return (
    <Box className={styles.container}>
      {/* <a href="tel:+55{$_configuracao->telefone_setor_operacoes|regex_replace:'/[^0-9]+/':''}"> */}
      <Container>
      {isMobile ? (
          <Box className={styles.topBar}>
            <Box className={styles.backArrow}>
              <a href="/" rel="noopener noreferrer">
                <Box className={styles.arrow}>
                  <KeyboardBackspaceOutlinedIcon />
                </Box>
              </a>
            </Box>

            <Heading fontSize={20} fontWeight={600} color="#ffffff">
              Dúvidas
            </Heading>
          </Box>
        ) : (
          <SideBar />
        )}

        <Box className={styles.headingWrapper}>
          <a href="/" rel="noopener noreferrer">
            <Box className={styles.arrow}>
              <KeyboardBackspaceOutlinedIcon />
            </Box>
          </a>

          <Heading fontSize={20} fontWeight={600}>
            Dúvidas
          </Heading>
        </Box>

        <Box className={styles.doubtWrapper}>
          <Text fontSize={18} fontWeight={700} color="#000000">
            Como podemos te ajudar?
          </Text>

          <Box className={styles.contentWrapper}>
            <a href="/contratos" rel="noopener noreferrer">
              <Text fontSize={14} fontWeight={700} color="#000000">
                Andamento do meu contrato
              </Text>

              <Box className={styles.arrow}>
                <KeyboardArrowRightOutlinedIcon />
              </Box>
            </a>

            <a href="/oportunidades" rel="noopener noreferrer">
              <Text fontSize={14} fontWeight={700} color="#000000">
                Minhas oportunidades
              </Text>

              <Box className={styles.arrow}>
                <KeyboardArrowRightOutlinedIcon />
              </Box>
            </a>

            <a href="http://localhost:3000/" rel="noopener noreferrer">
              <Text fontSize={14} fontWeight={700} color="#000000">
                Resolver minhas pendências
              </Text>

              <Box className={styles.arrow}>
                <KeyboardArrowRightOutlinedIcon />
              </Box>
            </a>

            <a href="http://localhost:3000/" rel="noopener noreferrer">
              <Text fontSize={14} fontWeight={700} color="#000000">
                Outras dúvidas
              </Text>

              <Box className={styles.arrow}>
                <KeyboardArrowRightOutlinedIcon />
              </Box>
            </a>
          </Box>
        </Box>

        <Navigation />
      </Container>
    </Box>
  );
}
