import './App.css'
import {Box} from "@mui/material";
import {FC} from "react";
import MapPage from "./components/map-page/MapPage.tsx";

const App: FC = () => {
  return (
      <Box sx={{ width: '100vw', height: '100vh' }}>
          <MapPage/>
      </Box>
  )
}

export default App
