import { MapContainer, TileLayer } from "react-leaflet";
import Click from "../Click/click";
import Location from "../Location/location";
import Mark from "../Marker/marker";
import Search from "../Search/search";
import Weather from "../Weather/weather";
import "leaflet/dist/leaflet.css";
import "./map.css";

function Map({
  searchInput,
  setSearchInput,
  markedPosition,
  setMarkedPosition,
  addToFavorites,
}) {
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
      <Weather
        searchInput={searchInput}
        markedPosition={markedPosition}
        addToFavorites={addToFavorites}
      />
    </MapContainer>
  );
}

export default Map;
