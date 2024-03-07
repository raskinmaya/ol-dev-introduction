import {Box} from "@mui/material";
import Map from 'ol/Map'
import {createRef, FC, useEffect, useRef, useState} from "react";
import Features from "./features/Features.tsx";
import {useMap} from "../../../hooks/context/map/common.ts";
import {useGeographic} from "ol/proj";
import FeatureInfo from "./features/feature-info/FeatureInfo.tsx";
import {Feature, MapBrowserEvent} from "ol";

const MapWrapper: FC = () => {
    const map = useMap();
    const mapContainerRef = createRef();
    const mapRef = useRef<Map | null>(map);
    const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
    useGeographic()

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const handleMapClick = (event: MapBrowserEvent<unknown>) => {
        if (!map) return;

        if (map.hasFeatureAtPixel(event.pixel) && map.getFeaturesAtPixel(event.pixel).length === 1)
            setSelectedFeature(map.getFeaturesAtPixel(event.pixel)[0] as Feature)
    }

    useEffect(() => {
        if (!map) return;

        map.setTarget(mapContainerRef.current as HTMLElement);
        mapRef.current = map;

        return () => {
            mapRef.current = null;
        }
    }, [map, mapContainerRef]);

    useEffect(() => {
        if (!map) return;

        map.on('click', handleMapClick);

        return () => {
            map.un('click', handleMapClick);
        }
    }, [map]);
    return (
        <Box sx={{ width: '100%', height: '80%' }}>
            <Box ref={mapContainerRef} sx={{ width: '100%', height: '100%' }}>
                <Features/>
                <FeatureInfo selectedFeature={selectedFeature} setSelectedFeature={setSelectedFeature}/>
            </Box>
        </Box>
    )
}

export default MapWrapper