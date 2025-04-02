import { useState } from "react";
import { getUserLocation } from "../../../backend/Services/Location/Location";

function Location({ setMyPosition }) {
  const [loading, setLoading] = useState(false);

  const handleGetLocation = () => {
    setLoading(true);
    getUserLocation(setMyPosition, setLoading); // Get the user's location and set it
  };

  return (
    <button
      onClick={handleGetLocation}
      disabled={loading}
      style={{ position: "absolute", top: 10, right: 10, zIndex: 1000 }}
    >
      {loading ? "Locating..." : "Get My Location"}
    </button>
  );
}

export default Location;
