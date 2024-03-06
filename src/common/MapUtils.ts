import Map from 'ol/Map'
import TileLayer from "ol/layer/Tile";
import {fromLonLat} from "ol/proj";
import {View} from "ol";
import {OSM} from "ol/source";

const DEFAULT_ZOOM_LEVEL = 8
const ISRAEL_CENTER_COORDINATE = fromLonLat([31.5, 34.5])

const defaultMapParams = {
    zoom: DEFAULT_ZOOM_LEVEL,
    center: ISRAEL_CENTER_COORDINATE
}

export const createMap = () : Map => {
    return new Map({
        layers: [
            new TileLayer({
                source: new OSM()
            })
        ],
        view: new View({
            ...defaultMapParams
        })
    })
}