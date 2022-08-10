import Box from "@mui/material/Box";
import Container from "../../Components/Container";
import Heading from "../../Components/Heading";
import styles from "./styles.module.scss";
import Text from "../../Components/Text";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import perfilImage from "./Assets/bruno-milano.png";
import { Grid } from "@mui/material";
import Dados from "./Dados";
import MoreInfos from "./MoreInfos";
import SideBar from "../../Components/SideBar";
import Navigation from "../../Components/BottomNavigation";
import useIsMobile from "../../helpers/useIsMobile";

export default function Conta() {
  const isMobile = useIsMobile({ size: 768 });

  return (
    <Box className={styles.container}>
      <Container>
        {isMobile ? (
          <>
            <Box className={styles.topBar}>
              <Box className={styles.backArrow}>
                <a href="/" rel="noopener noreferrer">
                  <Box className={styles.arrow}>
                    <KeyboardBackspaceOutlinedIcon />
                  </Box>
                </a>
              </Box>

              <Heading fontSize={20} fontWeight={600} color="#ffffff">
                Conta
              </Heading>
            </Box>

            <Box className={styles.clientNameMobile}>
              <Box className={styles.perfilImage}>
                <img src={perfilImage} alt="" />
              </Box>

              <Text fontWeight={600} color="#ffffff">
                Bruno Oliveira Milano
              </Text>
              <Text fontSize={14} color="#ffffff">
                000.000.000-00
              </Text>
            </Box>
          </>
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
            Conta
          </Heading>
        </Box>

        <Grid container spacing={1.5}>
          <Grid item xs={12} md={6} lg={6}>
            <Box className={styles.privateInfosWrapper}>
              <Box className={styles.clientName}>
                <Box className={styles.perfilImage}>
                  <img src={perfilImage} alt="" />
                </Box>

                <Text fontWeight={600} color="#ffffff">
                  Bruno Oliveira Milano
                </Text>
                <Text fontSize={14} color="#ffffff">
                  000.000.000-00
                </Text>
              </Box>

              <Box className={styles.infosWrapper}>
                <Heading fontSize={16}>Informações Pessoais</Heading>

                <Box className={styles.infos}>
                  <Dados />
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <MoreInfos />
          </Grid>
        </Grid>
      </Container>

      <Navigation />
    </Box>
  );
}
