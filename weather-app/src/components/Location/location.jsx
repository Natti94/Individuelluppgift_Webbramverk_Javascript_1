import { useEffect } from "react";

function Location({ setMyPosition }) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setMyPosition([position.coords.longitude, position.coords.latitude]);
      },
      (error) => {
        console.error("error getting location", error);
      }
    );
  }, [setMyPosition]);
  return null;
}

export default Location;
