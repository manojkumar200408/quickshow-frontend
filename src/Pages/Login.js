import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [showOtp, setShowOtp] = useState(false);

 const sendOtp = async () => {
  try {
    await axios.post("http://localhost:7000/api/auth/send-otp", {
      email,
    });

    alert("OTP sent to your email");
    setShowOtp(true);   // 🔥 THIS IS IMPORTANT

  } catch (err) {
    alert("Error sending OTP");
  }
};

const verifyOtp = async () => {
  try {
    await axios.post("http://localhost:7000/api/auth/verify-otp", {
      email,
      otp,
    });

    // 🔥 Save login status
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);

    window.location.href = "/Home";  

  } catch (err) {
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