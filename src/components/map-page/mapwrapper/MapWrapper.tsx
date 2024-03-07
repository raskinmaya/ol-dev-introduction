import {Box} from "@mui/material";
import Map from 'ol/Map'
import {createRef, FC, useEffect, useRef} from "react";
import Features from "./features/Features.tsx";
import {useMap} from "../../../hooks/context/map/common.ts";
import {useGeographic} from "ol/proj";

const MapWrapper: FC = () => {
    const map = useMap();
    const mapContainerRef = createRef();
    const mapRef = useRef<Map | null>(map);
    useGeographic()

    useEffect(() => {
        if (!map) return;

        map.setTarget(mapContainerRef.current as HTMLElement);
        mapRef.current = map;

        return () => {
            mapRef.current = null;
        }
    }, [map, mapContainerRef]);

    return (
        <Box sx={{ width: '100%', height: '80%' }}>
            <Box ref={mapContainerRef} sx={{ width: '100%', height: '100%' }}>
                <Features/>
            </Box>
        </Box>
    )
}

export default MapWrapper