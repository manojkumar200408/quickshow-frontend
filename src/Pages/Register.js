import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      alert("Account created successfully");
      navigate("/login");
    } catch (err) {
      alert("Error creating account");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleRegister} className="auth-box">
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
