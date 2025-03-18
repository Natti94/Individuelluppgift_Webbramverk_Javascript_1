import { useEffect } from "react";
import { LocationData } from "../../API/location";

function Location({ setMyPosition }) {
  useEffect(() => {
    async function fetchLocation() {
      const data = await LocationData();
      if (data && data.latitude && data.longitude) {
        setMyPosition([data.latitude, data.longitude]);
      }
    }
    fetchLocation();
  }, [setMyPosition]);

  return null;
}

export default Location;
