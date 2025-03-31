import { useState } from "react";
import Map from "./components/Map/map";
import Favourite from "./components/Favourite/favourite";
import Weather from "./components/Weather/weather";
import "leaflet/dist/leaflet.css";
import "./global.css";

function App() {
  const [searchInput, setSearchInput] = useState(null);
  const [markedPosition, setMarkedPosition] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const addToFavourites = (locationData) => {
    setFavourites((prev) => [...prev, locationData]);
  };
  const removeFromFavourites = (id) => {
    setFavourites((prev) => prev.splice((fav) => fav.id !== id));
  };
  return (
    <>
      <div className="Page">
        <div className="Map">
          <Map
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            markedPosition={markedPosition}
            setMarkedPosition={setMarkedPosition}
            addToFavorites={addToFavourites}
          />
        </div>
        <div className="Favourite">
          <button type="submit" onClick={removeFromFavourites}>
            delete favourites
          </button>
          <Favourite favourites={favourites} />
        </div>
        <div className="Weather">
          <Weather
            searchInput={searchInput}
            markedPosition={markedPosition}
            addToFavourites={addToFavourites}
          />
        </div>
      </div>
    </>
  );
}

export default App;
