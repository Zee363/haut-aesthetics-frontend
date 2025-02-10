import React, { useState } from "react";
import axios from "axios";
import "../pages/Login.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform login submission logic here (e.g., authentication)
    console.log("Login Form Submitted:", formData);

  try {
    const response = await axios.post("https://your-api-url.com/login", formData);

    console.log("Login successful:", response.data);

    // Perform further actions like storing tokens or redirecting to another page.
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error.message);
  }
};


  return (
    <div className="login-container container-fluid">
      <h3>Login into your account.</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <span className="last-buttons">
        <button type="submit">Login</button>
        <button type="submit">Sign Up</button>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
