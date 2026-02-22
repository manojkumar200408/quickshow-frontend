import { useState } from "react";
import axios from "axios";
import "./LoginModal.css";

function LoginModal({ closeModal }) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const sendOtp = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/send-otp", { email });
    alert("OTP sent to your email");
    setShowOtp(true);
  };

  const verifyOtp = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/verify-otp", { email, otp });

      localStorage.setItem("user", JSON.stringify({ email }));
      alert("Login Successful ✅");
      closeModal();
      window.location.reload();
    } catch {
      alert("Invalid OTP ❌");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <span className="close-btn" onClick={closeModal}>✕</span>

        <h2>Login with OTP</h2>

        {!showOtp ? (
          <form onSubmit={sendOtp}>
            <input
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="continue-btn">Send OTP</button>
          </form>
        ) : (
          <form onSubmit={verifyOtp}>
            <input
              type="text"
              placeholder="Enter OTP"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button className="continue-btn">Verify OTP</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginModal;