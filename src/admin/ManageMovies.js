import { useEffect, useState } from "react";
import axios from "axios";

function ManageMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:5000/api/admin/movies", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => setMovies(res.data));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>🎬 Manage Movies</h2>

      {movies.map(m => (
        <div key={m._id} style={{ margin: 10 }}>
          {m.title}
        </div>
      ))}
    </div>
  );
}

export default ManageMovies;
