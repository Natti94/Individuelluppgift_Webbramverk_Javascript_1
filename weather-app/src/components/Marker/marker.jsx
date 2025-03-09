import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Mark({ pos }) {
  if (!pos) return null;
  return (
    <Marker pos={pos}>
      <Popup>Marked Location</Popup>
    </Marker>
  );
}

export default Mark;
