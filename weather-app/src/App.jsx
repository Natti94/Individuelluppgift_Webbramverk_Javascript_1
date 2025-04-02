import { useState } from "react";
import Map from "./components/Map/map";
import Favourite from "./components/Favourite/favourite";
import Location from "./components/Location/location";
import Weather from "./components/Weather/weather";
import "leaflet/dist/leaflet.css";
import "./global.css";

function App() {
  const [searchInput, setSearchInput] = useState(null);
  const [markedPosition, setMarkedPosition] = useState(null);
  const [myPosition, setMyPosition] = useState([0, 0]); // Initialize with default position
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (locationData) => {
    setFavourites((prev) => [...prev, { ...locationData, id: Date.now() }]);
  };

  const removeFromFavourites = (id) => {
    setFavourites((prev) => prev.filter((fav) => fav.id !== id));
  };

  return (
    <div className="Page">
      <div className="Map">
        <Map
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          markedPosition={markedPosition}
          setMarkedPosition={setMarkedPosition}
          setMyPosition={setMyPosition} // Pass setMyPosition to Map
          myPosition={myPosition} // Pass myPosition to Map
        />
      </div>

      <div className="Favourite">
        <button
          type="button"
          onClick={() =>
            favourites.length > 0 && removeFromFavourites(favourites[0].id)
          }
        >
          🗑️
        </button>
        <Favourite favourites={favourites} />
      </div>

      <div className="Weather">
        <Location setMyPosition={setMyPosition} /> {/* Location */}
        <Weather
          searchInput={searchInput}
          markedPosition={markedPosition}
          addToFavourites={addToFavourites}
          myPosition={myPosition} // Weather uses myPosition
        />
      </div>
    </div>
  );
}

export default App;
