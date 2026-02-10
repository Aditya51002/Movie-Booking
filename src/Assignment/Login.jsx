import { useState } from "react";
import './Auth.css';

const Login = ({ setPage, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const login = () => {
    const e = (email || "").trim();
    if (!isValidEmail(e)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === e && user.password === password) {
      setUser(user);
      setPage("movie");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">🔐 Login</h2>
      <input
        placeholder="Email"
        type="email"
        onChange={(e) => {
          const v = e.target.value;
          setEmail(v);
          setEmailError(isValidEmail(v) ? "" : "Please enter a valid email address");
        }}
        className="auth-input"
      />
      {emailError && <div style={{ color: '#ffdddd', marginBottom: 10, fontSize: 13 }}>{emailError}</div>}

      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="auth-input"/>
      <button className="auth-button" onClick={login}> Login </button>
    </div>
  );
};

export default Login;
