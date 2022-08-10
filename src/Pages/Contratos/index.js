import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Heading from "../../Components/Heading";
import styles from "./styles.module.scss";
import Container from "../../Components/Container";
import Notification from "./Assets/notification.png";
import SideBar from "../../Components/SideBar";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Navigation from "../../Components/BottomNavigation";
import useIsMobile from "../../helpers/useIsMobile";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Contratos() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isMobile = useIsMobile({ size: 768 });

  return (
    <Box className={styles.container}>
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
              Contratos
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
            Contratos
          </Heading>
        </Box>

        <Box className={styles.border}>
          <Tabs
            classes={{ indicator: styles.tabsBorder }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Em andamento" {...a11yProps(0)} />
            <Tab label="Finalizado" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <Box className={styles.teste}>
          <TabPanel value={value} index={0}>
            <img src={Notification} alt="Sem Empréstimos" />

            <Box className={styles.tabText}>
              Você não possui empréstimos a serem exibidos.
            </Box>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <img src={Notification} alt="Sem Empréstimos" />

            <Box className={styles.tabText}>
              Você não possui empréstimos a serem exibidos.
            </Box>
          </TabPanel>
        </Box>

        {isMobile ? <Navigation /> : ""}
      </Container>
    </Box>
  );
}
