import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./MovieDetails.css";
import { useRef } from "react";
import Footer from "../Components/Footer";


function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [message, setMessage] = useState("");
  const dateRef = useRef(null);

  
  useEffect(() => {
    fetch("http://localhost:7000/api/movies")
    .then(res => res.json())
    .then(data => {
      const filtered = data.filter(m => m._id !== id);
      setRelatedMovies(filtered.slice(0,4));
    });
  }, [id]);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);
  
  
  useEffect(() => {
    axios.get(`http://localhost:7000/api/movies/${id}`)
    .then(res => setMovie(res.data))
      .catch(err => console.log(err));
  }, [id]);

  useEffect(() => {
    if (!movie) return;
  
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    const exist = stored.find(item => item._id === movie._id);
  
    setIsFavorite(!!exist);
  }, [movie]);

  if (!movie) {
    return <div style={{ color: "white" }}>Loading...</div>;
  }
  

  
const toggleFavorite = () => {
  const stored = JSON.parse(localStorage.getItem("favorites")) || [];

  const exist = stored.find(item => item._id === movie._id);

  if (exist) {
    const updated = stored.filter(item => item._id !== movie._id);
    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsFavorite(false);
  } else {
    stored.push(movie);
    localStorage.setItem("favorites", JSON.stringify(stored));
    setIsFavorite(true);
  }
};


 return (
  <div className="movie-details-page">

    {/* Top Section */}
    <div className="top-section">

      <img src={movie.image} alt="" className="poster" />

      <div className="info">
        <h1>{movie.title}</h1>
        <p className="rating">⭐ {movie.rating} User Rating</p>
        <p>{movie.description}</p>
        <p>{movie.duration} • {movie.genre} • {movie.year}</p>

        <div className="buttons">
          <button className="watch-btn">Watch Trailer</button>
         <button
  className="buy-btn"
  onClick={() => dateRef.current.scrollIntoView({ behavior: "smooth" })}
>
  Buy Tickets
</button>
{/* <button onClick={toggleFavorite}>♥</button> */}

 <button
  onClick={toggleFavorite}
  className={`heart-btn ${isFavorite ? "active" : ""}`}
>
  ♥
</button>

  {message && (
  <p style={{ color: "pink", marginTop: "10px" }}>
    {message}
  </p>
)}

        </div>
      </div>

    </div>

    {/* CAST SECTION */}
    <div className="cast-section">
      <h2>Your Favorite Cast</h2>
      <div className="cast-list">
        {movie.cast?.map((actor, index) => (
          <div key={index} className="cast-card">
            <img src={actor.image} alt="" />
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
    </div>

    {/* DATE SECTION */}
    <div className="date-section"  ref={dateRef}>
      <h2>Choose Date</h2>

      <div className="date-buttons">
        {["2026-2-04","2026-2-05","2026-2-06","2026-2-07","2026-2-08","2026-2-09","2026-2-10"].map(date => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            className={selectedDate === date ? "active" : ""}
          >
            {new Date(date).toDateString().slice(4,10)}
          </button>
        ))}
      </div>

      <button
        className="book-now"
        disabled={!selectedDate}
        onClick={() => navigate(`/booking/${id}/${selectedDate}`)}
      >
        Book Now
      </button>
    </div>
<div className="related-section">
  <h2>You May Also Like</h2>

  <div className="related-grid">
    {relatedMovies.map(movie => (
      <div key={movie._id} className="related-card">

        <img src={movie.image} alt="" />

        <h4>{movie.title}</h4>
        <p>{movie.year} • {movie.duration}</p>

        <div className="card-bottom">
          <button
            onClick={() => navigate(`/movies/${movie._id}`)}
          >
            Buy Tickets
          </button>

          <span>⭐ {movie.rating}</span>
        </div>

      </div>
    ))}
  </div>
</div>



  </div>
);

}

export default MovieDetails;
