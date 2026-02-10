import { useState } from "react";

const Register = ({ setPage }) => {
  const [form, setForm] = useState({
    name: "",
    roll: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    localStorage.setItem("user", JSON.stringify(form));
    alert("Registration Successful");
    setPage("login");
  };

  return ( 
    <div>
      <h2>Register</h2>
      <input name="name" placeholder="Name" onChange={handleChange} /><br /><br />
      <input name="roll" placeholder="Roll Number" onChange={handleChange} /><br /><br />
      <input name="email" placeholder="Email" onChange={handleChange} /><br /><br />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br /><br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
