import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Mark({ markedPosition }) {
  if (!markedPosition || markedPosition.lat || markedPosition.lng) return null;
  return (
    <Marker markedPosition={markedPosition}>
      <Popup>Marked Location</Popup>
    </Marker>
  );
}

export default Mark;
