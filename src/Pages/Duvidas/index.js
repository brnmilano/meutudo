import Box from "@mui/material/Box";
import Container from "../../Components/Container";
import Heading from "../../Components/Heading";
import styles from "./styles.module.scss";
import Text from "../../Components/Text";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

export default function Duvidas() {
  return (
    <Box className={styles.container}>
      <Container>
        <Box className={styles.headingWrapper}>
          <Heading fontSize={20} fontWeight={600}>
            Dúvidas?
          </Heading>
        </Box>

        <Box className={styles.doubtWrapper}>
          <Text fontSize={18} fontWeight={700} color="#000000">
            Como podemos te ajudar?
          </Text>

          <Box className={styles.contentWrapper}>
            <a href="http://localhost:3000/" rel="noopener noreferrer">
              <Text fontSize={14} fontWeight={700} color="#000000">
                Andamento do meu contrato
              </Text>

              <Box className={styles.arrow}>
                <KeyboardArrowRightOutlinedIcon />
              </Box>
            </a>

            <a href="http://localhost:3000/" rel="noopener noreferrer">
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
      </Container>
    </Box>
  );
}
