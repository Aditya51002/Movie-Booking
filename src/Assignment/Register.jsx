import { useState } from "react";

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
    <div style={cardStyle}>
      <h2 style={{ marginBottom: "20px" }}>Register</h2>

      <input
        placeholder="Name"
        style={inputStyle}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        style={inputStyle}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        style={inputStyle}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button style={buttonStyle} onClick={register}>
        Register
      </button>

      {/* <p style={linkStyle} onClick={() => setPage("login")}>
        Already registered? Login
      </p> */}
    </div>
  );
};

/* 🔹 STYLES (LOCAL & SAFE) */

const cardStyle = {
  width: "360px",
  padding: "30px",
  borderRadius: "18px",
  background: "#111827",
  color: "#f9fafb",
  boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "12px 0",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  fontSize: "14px"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
  borderRadius: "10px",
  border: "none",
  fontWeight: "bold",
  cursor: "pointer",
  background: "linear-gradient(135deg,#22c55e,#16a34a)",
  color: "#fff"
};

const linkStyle = {
  marginTop: "15px",
  textAlign: "center",
  textDecoration: "underline",
  cursor: "pointer",
  color: "#93c5fd"
};

export default Register;
