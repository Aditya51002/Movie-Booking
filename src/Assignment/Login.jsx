import { useState } from "react";
import './Auth.css';

const Login = ({ setPage, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.email === email && user.password === password) {
      setUser(user);
      setPage("movie");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">🔐 Login</h2>
      <input placeholder="Email"type="email" onChange={(e) => setEmail(e.target.value)} className="auth-input" />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="auth-input"/>
      <button className="auth-button" onClick={login}> Login </button>
    </div>
  );
};

export default Login;
