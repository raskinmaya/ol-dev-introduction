import './App.css'
import {Box} from "@mui/material";
import {FC} from "react";
import MapWrapper from "./components/MapWrapper.tsx";

const App: FC = () => {
  return (
      <Box sx={{ width: '100vw', height: '100vh' }}>
          <MapWrapper/>
      </Box>
  )
}

export default App
