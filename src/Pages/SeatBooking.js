import { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SeatBooking.css";

function SeatBooking() {
  const { id, date } = useParams();
const [movie, setMovie] = useState(null);
useEffect(() => {
  axios.get(`http://localhost:7000/api/movies/${id}`)
    .then(res => setMovie(res.data))
    .catch(err => console.log(err));
}, [id]);
console.log(id);



  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  const seatStructure = [
    { row: "A", count: 4 },
    { row: "B", count: 4 },

    { row: "C", count: 6 },
    { row: "D", count: 6 },

    { row: "E", count: 8 },
    { row: "F", count: 8 },

    { row: "G", count: 10 },
    { row: "H", count: 10 },

    { row: "I", count: 12 },
    { row: "J", count: 12 },
  ];


  const timings = ["9:00 AM", "12:30 PM", "04:00 PM", "07:30 PM"];


  const toggleSeat = (seat) => {
    if (!selectedTime) {
      alert("Please select your timing first");
      return;
    }

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const getSeatPrice = (seat) => {
    const vipRows = ["G", "H", "I", "J"];
    const rowLetter = seat.charAt(0);

    if (vipRows.includes(rowLetter)) {
      return 250;
    }
    return 150;
  };

  const handleConfirmBooking = async () => {
    try {
      const token = localStorage.getItem("token");

      const totalAmount = selectedSeats.reduce(
        (total, seat) => total + getSeatPrice(seat),
        0
      );

      await axios.post(
        "http://localhost:7000/api/bookings",
        {
          movieId: id,
          date,
          time: selectedTime,
          seats: selectedSeats,
          totalAmount
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Booking Successful 🎉");

    } catch (err) {
      alert("Booking Failed ❌");
    }
  };

  {movie && (
  <div className="movie-info">
    <img src={movie.image} alt={movie.title} />
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>{movie.duration} | {movie.language}</p>
    </div>
  </div>
)}

  return (
    <div className="seat-layout">

      {/* LEFT TIMING PANEL */}
      <div className="left-panel">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
        <h3>Available Timings</h3>
        {timings.map((time) => (
          <div
            key={time}
            className={`time-box ${selectedTime === time ? "active-time" : ""}`}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </div>
        ))}
      </div>

      {/* RIGHT SEAT AREA */}
      <div className="seat-area">

        <h2>Select your seat</h2>

        {/* Curved Screen */}
        <div className="screen-curve">
          <span>SCREEN SIDE</span>
        </div>

        <div className="seat-grid">

          {/* A & B Center */}
          {["A", "B"].map(row => (
            <div key={row} className="seat-row center">
              {Array.from({ length: 9 }).map((_, i) => {
                const seat = `${row}${i + 1}`;
                const isSelected = selectedSeats.includes(seat);

                return (
                  <div
                    key={seat}
                    className={`seat ${isSelected ? "selected" : ""} ${!selectedTime ? "disabled" : ""}`}
                    onClick={() => toggleSeat(seat)}
                  >
                    {seat}
                  </div>
                );
              })}
            </div>
          ))}

          {/* CD & EF block */}
          <div className="seat-row double">
            <div className="left-block">
              {["C", "D"].map(row =>
                Array.from({ length: 9 }).map((_, i) => {
                  const seat = `${row}${i + 1}`;
                  const isSelected = selectedSeats.includes(seat);

                  return (
                    <div
                      key={seat}
                      className={`seat ${isSelected ? "selected" : ""} ${!selectedTime ? "disabled" : ""}`}
                      onClick={() => toggleSeat(seat)}
                    >
                      {seat}
                    </div>
                  );
                })
              )}
            </div>

            <div className="right-block">
              {["E", "F"].map(row =>
                Array.from({ length: 9 }).map((_, i) => {
                  const seat = `${row}${i + 1}`;
                  const isSelected = selectedSeats.includes(seat);

                  return (
                    <div
                      key={seat}
                      className={`seat ${isSelected ? "selected" : ""} ${!selectedTime ? "disabled" : ""}`}
                      onClick={() => toggleSeat(seat)}
                    >
                      {seat}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* GH & IJ block */}
          <div className="seat-row double">
            <div className="left-block">
              {["G", "H"].map(row =>
                Array.from({ length: 9 }).map((_, i) => {
                  const seat = `${row}${i + 1}`;
                  const isSelected = selectedSeats.includes(seat);

                  return (
                    <div
                      key={seat}
                      className={`seat vip
    ${isSelected ? "selected" : ""} 
    ${!selectedTime ? "disabled" : ""} 
    ${["G", "H", "i"].includes(seat.charAt(0)) ? "vip" : ""}
  `}
                      onClick={() => toggleSeat(seat)}
                    >
                      {seat}
                    </div>
                  );
                })
              )}
            </div>

            <div className="right-block">
              {["I", "J"].map(row =>
                Array.from({ length: 9 }).map((_, i) => {
                  const seat = `${row}${i + 1}`;
                  const isSelected = selectedSeats.includes(seat);

                  return (
                    <div
                      key={seat}
                      className={`seat ${isSelected ? "selected" : ""} ${!selectedTime ? "disabled" : ""} 
  ${["G", "H", "I", "J"].includes(row) ? "vip" : ""}`}
                      onClick={() => toggleSeat(seat)}
                    >
                      {seat}
                    </div>
                  );
                })
              )}
            </div>
          </div>

        </div>




        {/* Booking Summary */}
        <div className="booking-summary">
          <p><strong>Timing:</strong> {selectedTime || "Not selected"}</p>
          <p><strong>Seats:</strong> {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}</p>
          <p><strong>Total:</strong> ₹{selectedSeats.reduce((total, seat) => total + getSeatPrice(seat), 0)}</p>

         

           <button
  className="confirm-btn"
  disabled={!selectedTime || selectedSeats.length === 0}
  onClick={handleConfirmBooking}
>
  Confirm Booking
</button>
        </div>

      </div>

    </div>

  );
}

export default SeatBooking;
