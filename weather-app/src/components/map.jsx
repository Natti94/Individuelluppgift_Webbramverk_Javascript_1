import App from './App.jsx'
import { MapContainer } from "react-leaflet";

const Map = () => {
  return (
    // London
<App>
    <MapContainer center={[51.5074, -0.1278]} zoom={10} />
</App>
      );
};

export default Map;
