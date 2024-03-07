import {FC, useEffect, useState} from "react";
import {GeoJSON} from "ol/format";
import {DEFAULT_MARKER_ICON, INITIAL_FEATURES_GEO_JSON_PATH} from "../../../../common/FilePaths.ts";
import {useMap} from "../../../../hooks/context/map/common.ts";
import VectorLayer from "ol/layer/Vector";
import LayerNames from "../../../../common/LayerNames.ts";
import VectorSource from "ol/source/Vector";
import {Feature} from "ol";
import {Icon, Style} from "ol/style";

const Features: FC = () => {
    const map = useMap()
    const [initialFeatures, setInitialFeatures] = useState<Feature[]>([]);

    useEffect(() => {
        fetch(INITIAL_FEATURES_GEO_JSON_PATH)
            .then(data => data.text())
            .then(text => setInitialFeatures(new GeoJSON().readFeatures(text)));
    }, []);

    useEffect(() => {
        if (!map) return;

        map.addLayer(new VectorLayer({
            properties: {
                name: LayerNames.INITIAL_FEATURES
            },
            source: new VectorSource({
                features: [...initialFeatures]
            }),
            style: new Style({
                image: new Icon({
                    src: DEFAULT_MARKER_ICON
                })
            })
        }))
    }, [map, initialFeatures])

    return (
        <></>
    )
}

export default Features