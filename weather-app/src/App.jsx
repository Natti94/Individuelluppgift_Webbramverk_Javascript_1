import { useState } from "react";
import Map from "./components/Map/map";
import Favourite from "./components/Favourite/favourite";
import Weather from "./components/Weather/weather";
import "leaflet/dist/leaflet.css";
import "./global.css";

function App() {
  const [searchInput, setSearchInput] = useState(null);
  const [markedPosition, setMarkedPosition] = useState(null);
  const [favourites, setFavorites] = useState([]);

  const addToFavorites = (locationData) => {
    setFavorites((prev) => [...prev, locationData]);
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
            addToFavorites={addToFavorites}
          />
        </div>
        <div className="Favourite">
          <Favourite favorites={favourites} />
        </div>
        <div className="Weather">
          <Weather
            searchInput={searchInput}
            markedPosition={markedPosition}
            addToFavorites={addToFavorites}
          />
        </div>
      </div>
    </>
  );
}

export default App;
