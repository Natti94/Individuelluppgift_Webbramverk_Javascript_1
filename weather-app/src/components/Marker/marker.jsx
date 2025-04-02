import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./marker.css";

function Mark({ markedPosition }) {
  if (
    !markedPosition ||
    markedPosition.lat === undefined ||
    markedPosition.lng === undefined
  )
    return null;
  return (
    <Marker position={[markedPosition.lat, markedPosition.lng]}>
      <Popup>
        <div className="popup">
          <p>Marked Location</p>
        </div>
      </Popup>
    </Marker>
  );
}

export default Mark;
