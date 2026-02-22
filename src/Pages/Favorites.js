import { useEffect, useState } from "react";
import "./Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

 const removeFavorite = (id) => {

  if (window.confirm("Are you sure you want to remove this movie?")) {

    const updated = favorites.filter(movie => movie._id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));

    alert("❌ Removed from Favorites");

  }

};

  return (
    <div className="favorites-container">
      <h2>My Favorites</h2>

      <div className="fav-grid">
        {favorites.length === 0 ? (
          <p>No favorite movies yet</p>
        ) : (
          favorites.map((movie) => (
            <div className="fav-card" key={movie._id}>

              <img src={movie.image} alt={movie.title} />

              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <p>{movie.duration}</p>
              <p>⭐ {movie.rating}</p>

              {/* 🔥 REMOVE BUTTON */}
              <button
                className="remove-btn"
                onClick={() => removeFavorite(movie._id)}
              >
                Remove
              </button>

            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favorites;
