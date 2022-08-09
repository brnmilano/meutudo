import Box from "@mui/material/Box";
import Container from "../../Components/Container";
import Text from "../../Components/Text";
import Heading from "../../Components/Heading";
import styles from "./styles.module.scss";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";

export default function Espera() {
  return (
    <Box className={styles.container}>
      <Container>
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Box display="flex" alignItems="center" gap={2}>
            <Heading fontSize={32}>Essa sessão ainda não está disponível</Heading>
            <SentimentDissatisfiedOutlinedIcon />
          </Box>

          <Text>Nosso time de desenvolvedores está trabalhando para melhor atenê-lo(a).</Text>
        </Box>
      </Container>
    </Box>
  );
}
