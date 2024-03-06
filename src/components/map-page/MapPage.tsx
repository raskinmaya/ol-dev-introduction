import {FC} from "react";
import MapProvider from "../../hooks/context/map/MapProvider.tsx";
import MapWrapper from "./mapwrapper/MapWrapper.tsx";

const MapPage: FC = () => {
    return (
        <MapProvider>
            <MapWrapper/>
        </MapProvider>
    )
}

export default MapPage