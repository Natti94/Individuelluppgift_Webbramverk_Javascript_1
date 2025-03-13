import { useEffect } from "react";

function Location({ MyPosition }) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        MyPosition([position.coords.longitude, position.coords.latitude]);
      },
      (error) => {
        console.error("error getting location", error);
      }
    );
  }, [MyPosition]);
  return null;
}

export default Location;
