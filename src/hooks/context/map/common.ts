import {createContext, useContext} from "react";
import Map from "ol/Map";

export const MapContext = createContext<Map | null>(null);

export const useMap = () => {
    return useContext(MapContext);
}