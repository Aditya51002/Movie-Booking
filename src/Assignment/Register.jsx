import { useState } from "react";
import './Auth.css';

const Register = ({ setPage }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const register = () => {
    if (!form.name || !form.email || !form.password) {
      alert("All fields are required");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
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
        placeholder="Email Address" type="email"className="auth-input"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

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
