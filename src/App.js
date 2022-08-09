import useIsMobile from "./helpers/useIsMobile";
import { Box } from "@mui/system";
import TopBar from "./Components/TopBar";
import SideBar from "./Components/SideBar";
import Pages from "./Pages";
import Rotas from "./routes";

function App() {
  const isMobile = useIsMobile({ size: 768 });

  return (
    <>
      <Box>{isMobile ? <TopBar /> : <SideBar />}</Box>

      <Rotas />
    </>
  );
}

export default App;
