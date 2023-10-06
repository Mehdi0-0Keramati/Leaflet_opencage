import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import Styles from "./Map.module.css";
import marker from "../../assets/icon-location.svg";

import { UseContextApi } from "../../Context/ContextApi";
import RecenterAutomatically from "./RecenterAutomatically";

const NewIcon = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
});

const Map = () => {
  const { coordinate, regions } = UseContextApi();

  return (
    <MapContainer
      center={[coordinate.lat, coordinate.lng]}
      zoom={8}
      scrollWheelZoom={false}
      attributionControl={true}
      animate={true}
      easeLinearity={0.35}
      fadeAnimation
      className={Styles["map-container"]}
    >
      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      <Marker icon={NewIcon} position={[coordinate.lat, coordinate.lng]}>
        <Popup>
          countery : {regions.country} <br /> city : {regions.city}
        </Popup>
      </Marker>
      <RecenterAutomatically lat={coordinate.lat} lng={coordinate.lng} />
    </MapContainer>
  );
};

export default Map;
