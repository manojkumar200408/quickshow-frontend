import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Movies from "./Pages/Movies";
import Book from "./Pages/Book";
import Navbar from "./Components/Navbar";
import AdminDashboard from "./admin/AdminDashboard";
import AddMovie from "./admin/AddMovie";
import ManageMovies from "./admin/ManageMovies";
import SeatBooking from "./Pages/SeatBooking"
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import Footer  from "./Components/Footer" 
import Favorites from "./Pages/Favorites";
import Register from "./Pages/Register";
import LoginModal from "./Components/LoginModal";






function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/admin" element={<AdminDashboard />} />
<Route path="/admin/add-movie" element={<AddMovie />} />
<Route path="/admin/manage-movies" element={<ManageMovies />} />

<Route path="/movies/:id" element={<MovieDetails />} />
<Route path="/booking/:id/:date" element={<SeatBooking />} />

 <Route path="/Home" element={<Home />} />
 <Route path="/favorites" element={<Favorites />} />
 <Route path="/register" element={<Register />} />
 <Route path="/LoginModel" element={<LoginModal />} />
  <Route path="/login" element={<Login />} />



 
      </Routes>
      <Footer    />
    </>
  );
}

export default App;

