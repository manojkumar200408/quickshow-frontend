import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Login() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [showOtp, setShowOtp] = useState(false);

  const sendOtp = async () => {
    try {
      await API.post("/send-otp", { email });
      alert("OTP Sent");
      setStep(2);
    } catch (error) {
      alert("Error sending OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      await API.post("/verify-otp", { email, otp });
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/");
      window.location.reload();
    } catch (error) {
      alert("Invalid OTP");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Sign in to QuickShow</h2>

      {step === 1 && (
        <>
         <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
         

          <button onClick={sendOtp}>Continue</button>
          <br />
          <br />
        </>
      )}
<br />
     {showOtp && (
  <>
    <input
      type="text"
      placeholder="Enter OTP"
      value={otp}
      onChange={(e) => setOtp(e.target.value)}
    />

    <button onClick={verifyOtp}>
      Verify OTP
    </button>
  </>
)}
    </div>
  );
}

export default Login;
    // <div className="login-container">

    //   <h1>Sign in to QuickShow</h1>
    //   <p>Welcome back! Please sign in to continue</p>

    //   <button className="google-btn">
    //     Continue with Google
    //   </button>

    //   <p>or</p>