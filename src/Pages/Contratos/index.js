import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from 'react-router-dom';
import Navigation from "../../Components/BottomNavigation";
import Container from "../../Components/Container";
import Heading from "../../Components/Heading";
import SideBar from "../../Components/SideBar";
import useIsMobile from "../../helpers/useIsMobile";
import Notification from "./Assets/notification.png";
import styles from "./styles.module.scss";

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Contratos() {
  const [value, setValue] = React.useState(0);
  const isMobile = useIsMobile({ size: 768 });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              Contratos
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
            Contratos
          </Heading>
        </Box>

        <Box className={styles.border}>
          <Tabs
            classes={{ indicator: styles.tabsBorder, root: styles.tabsRoot }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab classes={{ root: styles.testeTabs }} label="Em andamento" {...a11yProps(0)} />
            <Tab classes={{ root: styles.testeTabs }} label="Finalizado" {...a11yProps(1)} />
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

        {isMobile && <Navigation />}
      </Container>
    </Box>
  );
}
