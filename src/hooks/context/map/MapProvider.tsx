import {FC, ReactNode, useState} from "react";
import Map from 'ol/Map'
import { MapContext } from "./common.ts";

type MapProviderProps = {
    children: ReactNode
}

const MapProvider: FC<MapProviderProps> = ({ children }) => {
    const [map, setMap] = useState<Map | null>(null);

    return (
        <MapContext.Provider value={{ map, setMap }}>
            { children }
        </MapContext.Provider>
    )
}
export default MapProvider
