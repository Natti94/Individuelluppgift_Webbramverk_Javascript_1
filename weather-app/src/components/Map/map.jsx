import { MapContainer, TileLayer } from "react-leaflet";
import Click from "../Click/click";
import "leaflet/dist/leaflet.css";
import "./mapStyle.css";

function Map() {
  return (
    <>
      <p className="map-text">
        choose location with the pin point marker in order to get weather data
      </p>
      <MapContainer
        onClick="weather()"
        className="map"
        center={[51.5074, -0.1278]}
        zoom={10}
        setMarkedPos={setMarkedPos}
        setWeatherData={setWeatherData}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      <Click setMarkedPos={setMarkedPos} />
      </MapContainer>
    </>
  );
}

export default Map;
