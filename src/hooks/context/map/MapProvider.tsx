import {FC, ReactNode} from "react";
import Map from 'ol/Map'
import { MapContext } from "./common.ts";

type MapProviderProps = {
    children: ReactNode,
    map: Map
}

const MapProvider: FC<MapProviderProps> = ({ children, map }) => {
    return (
        <MapContext.Provider value={map}>
            { children }
        </MapContext.Provider>
    )
}
export default MapProvider
