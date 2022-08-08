import useIsMobile from "./helpers/useIsMobile";
import { Box } from "@mui/system";
import TopBar from "./Components/TopBar";
import SideBar from "./Components/SideBar";
import Pages from "./Pages";

function App() {
  const isMobile = useIsMobile({ size: 768 });

  return (
    <div>
      <Box>
        {isMobile ? <TopBar /> : <SideBar />}
      </Box>

      <Pages />
    </div>
  );
}

export default App;
