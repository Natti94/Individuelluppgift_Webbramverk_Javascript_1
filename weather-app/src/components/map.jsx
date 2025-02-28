import { MapContainer, TileLayer } from "react-leaflet";

function Map() {
  return (
    <MapContainer center={[51.5074, -0.1278]} zoom={10}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default Map;
