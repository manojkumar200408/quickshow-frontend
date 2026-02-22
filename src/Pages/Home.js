import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import API from "../api";
// import Footer from "../Components/Footer";
function Home() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

 useEffect(() => {
  const fetchMovies = async () => {
    try {
      const res = await axios.get("https://quickshow-backend-kzqj.onrender.com/api/movies");
      setMovies(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchMovies();
}, []); useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await API.get("/api/movies");
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  const featuredMovies = [
    {
      title: "Avengers: Endgame",
      image: "https://images4.alphacoders.com/115/thumb-1920-1156790.jpg",
      genre: "Action | Sci-Fi",
      duration: "3h 2m"
    },
    {
      title: "stranger things",
      image: "https://wallpapers.com/images/hd/dustin-stranger-things-d23k0xk7hechwqqn.jpg",
      genre: "Sci-Fi | Drama",
      duration: "2h 49m"
    },
    {
      title: "The Dark Knight",
      image: "https://wallpapers.com/images/featured-full/dark-knight-joker-in-4k-ultra-hd-mnqzyww80imo676h.jpg",
      genre: "Action | Crime",
      duration: "2h 32m"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === featuredMovies.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const movie = featuredMovies[current];

  const [mainTrailer, setMainTrailer] = useState("TcMBFSGVi1c");


 


  return (
    
    <div className="home">
      <div
        className="hero"
        style={{ backgroundImage: `url(${movie.image})` }}
      >
        <div className="overlay">

          <h1>{movie.title}</h1>
          <p>{movie.genre} • {movie.duration}</p>

          <button
            className="explore-btn"
            onClick={() => navigate("/movies")}
          >
            Explore Movies →
          </button>

        </div>
      </div>
      {/* MOVIES SECTION */}
<div className="home-movies">

  <h2>Now Showing</h2>

<div className="movie-grid">
  {movies.slice(0, 6).map((movie) => (
    <div key={movie._id} className="wide-movie-card">

      <img src={movie.image} alt={movie.title} />

      <div className="wide-content">
        <h3>{movie.title}</h3>

        <p className="wide-meta">
          {movie.year} • {movie.language} • {movie.duration}
        </p>

        <div className="wide-bottom">
          <button
            className="buy-btn"
            onClick={() => navigate("/movies")}
          >
            Buy Tickets
          </button>

          <div className="rating">⭐ {movie.rating}</div>
        </div>
      </div>
    </div>
  ))}
</div>


</div>

{/* MAIN TRAILER SECTION */}

<div className="main-trailer">

<h2>MOVIE TRAILER</h2>
<div className="main-trailer">

  {/* BIG VIDEO */}
  <div className="video-wrapper">
    <iframe
      src={`https://www.youtube.com/embed/${mainTrailer}`}
      title="Main Trailer"
      allowFullScreen
    ></iframe>
  </div>

  {/* THUMBNAILS */}
  <div className="trailer-thumbnails">

    <img
      src="https://img.youtube.com/vi/fxG-3zNl7QU/0.jpg"
      onClick={() => setMainTrailer("fxG-3zNl7QU")}
      alt="Trailer1"
    />

    <img
      src="https://img.youtube.com/vi/VxX_WCVzpKY/0.jpg"
      onClick={() => setMainTrailer("VxX_WCVzpKY")}
      alt="Trailer2"
    />

    <img
      src="https://img.youtube.com/vi/7vqyNHCAmjg/0.jpg"
      onClick={() => setMainTrailer("7vqyNHCAmjg")}
      alt="Trailer3"
    />
    <img
      src="https://img.youtube.com/vi/zzJ7RNQvUfk/0.jpg"
      onClick={() => setMainTrailer("zzJ7RNQvUfk")}
      alt="Trailer3"
    />

  </div>

</div>


</div>
 

   </div>
  );
}
export default Home;
   

