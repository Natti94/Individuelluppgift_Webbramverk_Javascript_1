import { useMapEvents } from "react-leaflet";

function Click({ setMarkedPos }) {
  useMapEvents("click", (e) => {
    setMarkedPos(e.latlng);
  });
  return null;
}

export default Click;
