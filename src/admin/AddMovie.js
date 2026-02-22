import axios from "axios";
import { useState } from "react";

function AddMovie() {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    poster: "",
    language: "",
    duration: ""
  });

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:5000/api/admin/add-movie",
      movie,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    alert("Movie added successfully");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Add Movie</h2>

      {Object.keys(movie).map((key) => (
        <input
          key={key}
          placeholder={key}
          onChange={(e) =>
            setMovie({ ...movie, [key]: e.target.value })
          }
        />
      ))}

      <br /><br />
      <button onClick={handleSubmit}>Add Movie</button>
    </div>
  );
}

export default AddMovie;
