// import styles from "./styles.module.scss";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import Container from "../../Components/Container";
import styles from "./styles.module.scss";
import Heading from "../../Components/Heading";
import Text from "../../Components/Text";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Offer from "./Assets/offer.png";
import Help from "./Assets/help.png";
import ErrorImage from "./Assets/error-image.png";
import Forward from "./Assets/forward.svg";
import Doubt from "./Assets/doubt.svg";
import SideBar from "../../Components/SideBar";
import Navigation from "../../Components/BottomNavigation";
import useIsMobile from "../../helpers/useIsMobile";
import Mail from "./Assets/mail.png";
import useAuth from "../../Contexts/useAuth"

export default function Home() {
  const isMobile = useIsMobile({ size: 768 });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { nome } = useAuth();

  return (
    <Box className={styles.container}>
      <Container>
        {isMobile ? (
          <>
            <Box className={styles.topBar}>
              <Box className={styles.dropDown}>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <NotificationsOutlinedIcon />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem
                    style={{ display: "flex", flexDirection: "column" }}
                    onClick={handleClose}
                  >
                    <Text color="#7a7a7a">Notificações</Text>

                    <img src={Mail} alt="Notificações" />

                    <Text color="#7a7a7a">Você não possui Notificações</Text>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>

            <Box className={styles.mobileHeadingWrapper}>
              <Box>
                <Heading fontWeight={700} fontSize={22} color="#FFFFFF">
                  Olá, {nome}
                </Heading>
                <Text fontSize={14} color="#FFFFFF">
                  Como podemos te ajudar hoje?
                </Text>
              </Box>
            </Box>
          </>
        ) : (
          <SideBar />
        )}

        <Box className={styles.contentWrapper}>
          <Box className={styles.headingWrapper}>
            <Box>
              <Heading fontWeight={700} fontSize={22}>
                Olá, {nome}
              </Heading>
              <Text fontSize={14} color="#414141">
                Como podemos te ajudar hoje?
              </Text>
            </Box>

            <Box className={styles.dropDown}>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <NotificationsOutlinedIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  style={{ display: "flex", flexDirection: "column" }}
                  onClick={handleClose}
                >
                  <Text color="#7a7a7a">Notificações</Text>

                  <img src={Mail} alt="Notificações" />

                  <Text color="#7a7a7a">Você não possui Notificações</Text>
                </MenuItem>
              </Menu>
            </Box>
          </Box>

          <Box className={styles.clientWrapper}>
            <img className={styles.offerImage} src={Offer} alt="Error" />

            <Box>
              <Heading fontSize={18}>FGTS</Heading>
              <Text fontSize={14}>Aqui você vê duas oportunidades</Text>
            </Box>
          </Box>

          <Box className={styles.interestWrapeer}>
            <img
              className={styles.errorImage}
              src={ErrorImage}
              alt="Logo meutudo"
            />

            <Text fontSize={14} color="#7a7a7a">
              Trabalhador informado não possui contas de FGTS
            </Text>
          </Box>

          <Box className={styles.newWrapper}>
            <Box display="flex">
              <Box className={styles.new}>
                <Text fontWeight={700} fontSize={12} color="#d22688">
                  Novo
                </Text>
              </Box>
              <Text fontSize={18} fontWeight={600} color="#000000">
                Descubra mais
              </Text>
            </Box>

            <Box className={styles.newContent}>
              <Box className={styles.card}>
                <img src={Forward} alt="Convide seus amigos" />

                <Box className={styles.cardContent}>
                  <Text fontWeight={600} color="#000000">
                    Convide seus amigos para a meutudo.
                  </Text>

                  <Text
                    fontWeight={600}
                    color="#d22697"
                    textDecoration="underline"
                  >
                    <a
                      href="https://wa.me/5561983426022?text=Eu+fa%C3%A7o+parte+da+meutudo.+%3A%29"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Convidar
                    </a>
                  </Text>
                </Box>
              </Box>

              <Box className={styles.card}>
                <img src={Doubt} alt="Convide seus amigos" />

                <Box className={styles.cardContent}>
                  <Text fontWeight={600} color="#000000">
                    Saiba tudo sobre o Saque-Aniversário FGTS
                  </Text>

                  <Text
                    fontWeight={600}
                    color="#d22697"
                    textDecoration="underline"
                  >
                    <a
                      href="https://wa.me/5561983426022?text=Eu+fa%C3%A7o+parte+da+meutudo.+%3A%29"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Convidar
                    </a>
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className={styles.helpWrapper}>
            <a
              href="https://wa.me/5561983426022?text=Eu+fa%C3%A7o+parte+da+meutudo.+%3A%29"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box>
                <Text color="#000000" fontWeight={600}>
                  Precisa de ajuda?
                </Text>

                <Text color="#000000">Estamos prontos para te auxiliar.</Text>
              </Box>

              <img src={Help} alt="Precisa de ajuda?" />
            </a>
          </Box>
        </Box>

        {isMobile ? <Navigation /> : ""}
      </Container>
    </Box>
  );
}
