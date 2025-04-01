function Favourite({ favourites = [] }) {
  return (
    <div>
      <h3>⭐ Favourite Locations</h3>
      {favourites.length === 0 ? (
        <p>you have no favourites..</p>
      ) : (
        <ul>
          {favourites.map((fav) => (
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
