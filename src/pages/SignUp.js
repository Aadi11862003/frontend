// src/pages/SignUp.js
import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    temp.name = form.name ? "" : "Name is required";
    temp.email = /\S+@\S+\.\S+/.test(form.email) ? "" : "Invalid email";
    temp.password = form.password.length >= 6 ? "" : "Min 6 characters";
    setErrors(temp);
    return Object.values(temp).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Sign up successful!");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        <div className="error">{errors.name}</div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />
        <div className="error">{errors.email}</div>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <div className="error">{errors.password}</div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
