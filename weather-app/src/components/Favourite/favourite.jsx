// Favourite.jsx
import "./favourite.css";

function Favourite({ favorites = [] }) {
  return (
    <div className="favourite">
      <h3>⭐ Favourite Locations</h3>
      {favorites.length === 0 ? (
        <p>No favorite locations yet</p>
      ) : (
        <ul>
          {favorites.map((fav) => (
            <li key={fav.id}>
              <strong>{fav.location}</strong>
              <p>Temp: {fav.temp}°C</p>
              <p>Weather: {fav.description}</p>
              <p>{new Date(fav.timestamp * 1000).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favourite;