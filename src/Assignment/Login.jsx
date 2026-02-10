import { useState } from "react";

const Login = ({ setPage, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.password === password) {
      setUser(user);
      setPage("movie");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      style={{
        width: "340px",
        padding: "30px",
        borderRadius: "18px",
        background: "#111827",
        color: "#f9fafb",
        boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
      }}
    >
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      />

      <button style={buttonStyle} onClick={login}>
        Login
      </button>

      {/* <p style={linkStyle} onClick={() => setPage("register")}>
        New user? Register
      </p> */}
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "12px 0",
  borderRadius: "8px",
  border: "none"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  fontWeight: "bold",
  cursor: "pointer"
};

const linkStyle = {
  marginTop: "15px",
  textDecoration: "underline",
  cursor: "pointer"
};

export default Login;
