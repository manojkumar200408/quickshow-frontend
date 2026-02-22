import { Link } from "react-router-dom";
import "./MovieCard.css";
import Footer from "./Footer";


function MovieCard({ movie }) {
  return (
    <div className="movie-card">

      <img src={movie.image} alt={movie.title} />

      <div className="card-content">
        <h3>{movie.title}</h3>

        <br />

        <p className="meta">
          {movie.year} • {movie.duration}
        </p>

        <p className="rating">
          ⭐ {movie.rating}
        </p>
        <p className="description">
          {movie.description?.length > 100
            ? movie.description.substring(0, 100) + "..."
            : movie.description}
        </p>
      <Link to={`/movies/${movie._id}`}>
        <button className="buy-btn">Buy Tickets</button>
      </Link>
      </div>
    </div>
  );

}

export default MovieCard;
