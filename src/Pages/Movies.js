import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";
import "./Movies.css";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7000/api/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
     <div>

    <div className="movies-page">

  {movies.map((movie) => (
    <MovieCard key={movie._id} movie={movie} />
  ))}
</div>
</div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: 40,
    padding: 40,
    background: "black",
    minHeight: "100vh"
    
  }
};

export default Movies;
