import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Navigation from "../../Components/BottomNavigation";
import Container from "../../Components/Container";
import Heading from "../../Components/Heading";
import SideBar from "../../Components/SideBar";
import Text from "../../Components/Text";
import useIsMobile from "../../helpers/useIsMobile";
import styles from "./styles.module.scss";

export default function Duvidas() {
  const isMobile = useIsMobile({ size: 768 });

  return (
    <Box className={styles.container}>
      <Container>
      {isMobile ? (
          <Box className={styles.topBar}>
            <Box className={styles.backArrow}>
              <Link to="/home">
                <Box className={styles.arrow}>
                  <KeyboardBackspaceOutlinedIcon />
                </Box>
              </Link>
            </Box>

            <Heading fontSize={20} fontWeight={600} color="#ffffff">
              Dúvidas
            </Heading>
          </Box>
        ) : (
          <SideBar />
        )}

        <Box className={styles.headingWrapper}>
          <Link to="/home">
            <Box className={styles.arrow}>
              <KeyboardBackspaceOutlinedIcon />
            </Box>
          </Link>

          <Heading fontSize={20} fontWeight={600}>
            Dúvidas
          </Heading>
        </Box>

        <Box className={styles.doubtWrapper}>
          <Text fontSize={18} fontWeight={700} color="#000000">
            Como podemos te ajudar?
          </Text>

          <Box className={styles.contentWrapper}>
            <Link to="/contrato">
              <Text fontSize={14} fontWeight={700} color="#000000">
                Andamento do meu contrato
              </Text>

              <Box className={styles.arrow}>
                <KeyboardArrowRightOutlinedIcon />
              </Box>
            </Link>

            <Link to="/oportunidades">
              <Text fontSize={14} fontWeight={700} color="#000000">
                Minhas oportunidades
              </Text>

              <Box className={styles.arrow}>
                <KeyboardArrowRightOutlinedIcon />
              </Box>
            </Link>

            <Link to="/espera">
              <Text fontSize={14} fontWeight={700} color="#000000">
                Resolver minhas pendências
              </Text>

              <Box className={styles.arrow}>
                <KeyboardArrowRightOutlinedIcon />
              </Box>
            </Link>

            <Link to="/espera">
              <Text fontSize={14} fontWeight={700} color="#000000">
                Outras dúvidas
              </Text>

              <Box className={styles.arrow}>
                <KeyboardArrowRightOutlinedIcon />
              </Box>
            </Link>
          </Box>
        </Box>

        <Navigation />
      </Container>
    </Box>
  );
}
