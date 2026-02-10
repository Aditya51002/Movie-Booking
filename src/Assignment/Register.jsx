import { useState } from "react";
import './Auth.css';

const Register = ({ setPage }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [emailError, setEmailError] = useState("");

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const register = () => {
    const name = (form.name || "").trim();
    const email = (form.email || "").trim();
    const password = form.password || "";

    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // save normalized user
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration Successful");
    setPage("login");
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">✨ Register</h2>

      <input placeholder="Full Name" type="text" className="auth-input"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email Address" type="email" className="auth-input"
        onChange={(e) => {
          const v = e.target.value;
          setForm({ ...form, email: v });
          setEmailError(isValidEmail(v) ? "" : "Please enter a valid email address");
        }}
      />
      {emailError && (
        <div style={{ color: '#ffdddd', marginBottom: 10, fontSize: 13 }}>{emailError}</div>
      )}

      <input
        type="password" placeholder="Password" className="auth-input"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button className="auth-button" onClick={register}>
        Register
      </button>
    </div>
  );
};

export default Register;
