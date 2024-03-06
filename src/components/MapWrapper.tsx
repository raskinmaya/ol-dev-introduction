import {Box} from "@mui/material";
import Map from 'ol/Map'
import {createRef, FC, useEffect, useRef, useState} from "react";
import {createMap} from "../common/MapUtils.ts";

const MapWrapper: FC = () => {
    const [map, setMap] = useState<Map | null>(null);
    const mapContainerRef = createRef();
    const mapRef = useRef<Map | null>(map);

    useEffect(() => {
        if (!map) return;

        map.setTarget(mapContainerRef.current as HTMLElement);
        mapRef.current = map;

        return () => {
            mapRef.current = null;
        }
    }, [map]);

    useEffect(() => {
        if (!mapRef.current)
            setMap(createMap());
    }, []);

    return (
        <Box sx={{ width: '100%', height: '80%' }}>
            <Box ref={mapContainerRef} sx={{ width: '100%', height: '100%' }}/>
        </Box>
    )
}

export default MapWrapper