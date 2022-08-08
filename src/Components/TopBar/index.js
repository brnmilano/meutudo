import { Box } from "@mui/system";
import styles from "./styles.module.scss";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Text from "../Text";
import Heading from "../Heading";
import LogoMobile from "./Assets/logo-mobile.png"

export default function TopBar() {
  return (
    <>
      <Box className={styles.container}>
        <img src={LogoMobile} alt="Logo meutudo" />
        <NotificationsOutlinedIcon />
      </Box>

      <Box className={styles.headingWrapper}>
        <Box>
          <Heading color="#ffffff" fontWeight={700} fontSize={22}>
            Olá, Bruno
          </Heading>

          <Text fontSize={14} color="#ffffff">
            Como podemos te ajudar hoje?
          </Text>
        </Box>
      </Box>
    </>
  );
}
