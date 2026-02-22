import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import { useState ,useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
 const [userEmail, setUserEmail] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const storedUser = localStorage.getItem("user");
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  const loginStatus = localStorage.getItem("isLoggedIn");
  if (loginStatus === "true") {
    setIsLoggedIn(true);
  }
}, []);
  
useEffect(() => {
  const email = localStorage.getItem("userEmail");
  if (email) {
    setUserEmail(email);
  }
}, []);


  if (storedUser && storedUser !== "undefined") {
    try {
      user = JSON.parse(storedUser);
    } catch (error) {
      user = null;
    }
  }
   const handleLogout = () => {
    localStorage.removeItem("user");
    setShowDropdown(false);
    navigate("/Home");
    window.location.reload(); // refresh to update navbar
  };
  return (
    <div className="navbar">

     <div className="logo" onClick={() => navigate("/Home")}>

  <span className="logo-q">Q</span>uickShow


</div>
     <div className="nav-links">
        <Link to="/Home">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/">Theaters</Link>
        <Link to="/favorites">Favorite</Link>

      </div>

{userEmail ? (
  <div className="user-menu">
    <div
      className="user-email"
      onClick={() => setShowDropdown(!showDropdown)}
    >
      {userEmail.charAt(0).toUpperCase()}
    </div>

    {showDropdown && (
      <div className="dropdown">
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/Home";
          }}
        >
          Logout
        </button>
      </div>
    )}
  </div>
) : (
  <button onClick={() => navigate("/login")}>
    Login
  </button>
)}




    </div>
  );
}

export default Navbar;
