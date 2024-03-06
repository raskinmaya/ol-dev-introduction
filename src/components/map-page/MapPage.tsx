import {FC} from "react";
import MapProvider from "../../hooks/context/map/MapProvider.tsx";
import MapWrapper from "./mapwrapper/MapWrapper.tsx";
import {createMap} from "../../common/MapUtils.ts";

const MapPage: FC = () => {
    return (
        <MapProvider map={createMap()}>
            <MapWrapper/>
        </MapProvider>
    )
}

export default MapPage