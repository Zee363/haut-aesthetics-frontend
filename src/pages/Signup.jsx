import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../pages/Signup.css";

const Signup = () => {
    const [formData, setFormData] = useState({
       fullname: "",
        email: "",
        password: "",
    });
     
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submtted:", formData);
    
    try {
        const response = await axios.post("http://localhost:5000/api/auth/signup", formData);
  
        console.log("Signup successful:", response.data);
  
        // Perform further actions like redirecting to another page, etc.
        
    navigate("/signup");
      } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
      }
};

    return (
        <div className="signup-container">
            <h3>Don't have an account? Create one now!</h3>
           <form onSubmit={handleSubmit}>
           <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange}  required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required/>
                </div>
                
                <span className="last-buttons">
                <button type="submit">Sign Up</button>
                <button type="submit">Login</button>
                </span>

            </form>
        </div>
    );
};

export default Signup;