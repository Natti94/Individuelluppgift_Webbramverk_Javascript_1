import { MapContainer, TileLayer } from "react-leaflet";
import Click from "../Click/click";
import Location from "../Location/location";
import Mark from "../Marker/marker";
import Search from "../Search/search";

function Map({ markedPosition, setMarkedPosition, setSearchInput }) {
  return (
    <MapContainer center={[0, 0]} zoom={5}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Click setMarkedPosition={setMarkedPosition} />
      <Mark markedPosition={markedPosition} />
      <Search
        setSearchInput={setSearchInput}
        setMarkedPosition={setMarkedPosition}
      />
      <Location setMyPosition={() => {}} />
    </MapContainer>
  );
}

export default Map;
