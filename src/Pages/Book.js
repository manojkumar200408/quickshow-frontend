// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";




// const seatPrice = 150;

// const seatLayout = [
//   ["A1", "A2", "A3", "A4", "A5","A6"],
//   ["B1", "B2", "B3", "B4", "B5","B6"],
//   ["C1", "C2", "C3", "C4", "C5","C6"],
//   ["D1", "D2", "D3", "D4", "D5","D6"],
//   // ["E1", "E2", "E3", "E4", "E5","E6"]
// ];


// function Book() {
// const navigate = useNavigate();

//   const { id } = useParams();
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const toggleSeat = (seat) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seat));
//     } else {
//       setSelectedSeats([...selectedSeats, seat]);
//     }
//   };

//   const totalAmount = selectedSeats.length * seatPrice;

//   const bookTicket = async () => {
//     if (selectedSeats.length === 0) {
//       alert("Select at least one seat");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");

//       await axios.post(
//         "http://localhost:5000/api/bookings/book",
//         {
//           movieId: id,
//           seats: selectedSeats,
//           showTime: "7:00 PM",
//           totalAmount: totalAmount
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       alert("🎉 Ticket Booked Successfully");
//       setSelectedSeats([]);
//     } catch (err) {
//       console.log(err.response?.data);
//       alert("Booking failed");
//     }
//   };

//   return (
//     <div style={{ padding: 40 }}>
//       <h2>Select Seats</h2>

//       {/* SCREEN */}
//       <div
//         style={{
//           background: "#333",
//           height: 8,
//           width: "60%",
//           margin: "20px auto",
//           borderRadius: 4,
//           textAlign: "center",
//           color: "#aaa",
//           fontSize: 12
//         }}
//       >
//         SCREEN
//       </div>

//       {/* SEATS */}
//       <div style={{ textAlign: "center" }}>
//         {seatLayout.map((row, i) => (
//           <div key={i} style={{ marginBottom: 15 }}>
//             {row.map(seat => (
//               <span
//                 key={seat}
//                 onClick={() => toggleSeat(seat)}
//                 style={{
//                   display: "inline-block",
//                   width:45,
//                   height: 45,
//                   lineHeight: "45px",
//                   margin: 8,
//                   borderRadius: 6,
//                   cursor: "pointer",
//                   background: selectedSeats.includes(seat)
//                     ? "#e50914"
//                     : "#1c1c1c",
//                   border: "1px solid #444"
//                 }}
//               >
                
//                 {seat}
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>

//         {/* <button onClick={() => navigate("/seats")}>
//   Book Seats
// </button> */}

//       {/* SUMMARY */}
//       <div style={{ marginTop: 30 }}>
//         <p>🎟️ Selected Seats: {selectedSeats.join(", ") || "None"}</p>
//         <p>💰 Total Amount: ₹{totalAmount}</p>

//         <button
//           style={{ marginTop: 20 }}
//           onClick={bookTicket}
//         >
//           Confirm Booking
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Book;
