import Favourite from "./components/Favourite/Favourite";
import Search from "./components/Search/search";
import Map from "./components/Map/map";
import "./global.css";

function App() {
  return (
    <>
      <div className="page">
        <div className="Favourite">
          <Favourite />
        </div>
        <div className="Search">
        <Search />
        </div>
        <div className="Map">
          <Map />
        </div>
      </div>
    </>
  );
}

export default App;
