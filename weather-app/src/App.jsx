import { useState } from "react";
import Map from "./components/Map/map";
import Favourite from "./components/Favourite/favourite";

function App() {
  const [searchInput, setSearchInput] = useState(null);
  const [markedPosition, setMarkedPosition] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (locationData) => {
    setFavorites((prev) => [...prev, locationData]);
  };

  return (
    <>
      <Map
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        markedPosition={markedPosition}
        setMarkedPosition={setMarkedPosition}
        addToFavorites={addToFavorites}
      />
      <Favourite favorites={favorites} />
    </>
  );
}

export default App;
