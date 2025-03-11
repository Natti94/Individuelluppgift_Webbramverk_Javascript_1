import { useMapEvents } from "react-leaflet";

function Click({ setMarkedPosition }) {

  useMapEvents({ click: (e) => setMarkedPosition(e.latlng) });
  return null;
}

export default Click;
  