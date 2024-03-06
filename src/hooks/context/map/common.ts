import {createContext, useContext} from "react";
import Map from "ol/Map";

type MapContextT = {
    map: Map | null,
    setMap: (map: Map | null) => void
}

export const MapContext = createContext<MapContextT>({ map: null, setMap: () => {}})

export const useMap = () => {
    const context = useContext(MapContext);

    if (!context) return null;

    return { map: context.map, setMap: context.setMap };
}

export const useMapContext = () => {
    return useContext(MapContext);
}
