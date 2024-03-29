import React, { useState, useEffect } from "react";
import LoginPage from './loginPage.js'
import "./loginsignup.css";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { HashRouter as Router, Route,Routes, Link } from "react-router-dom";

const LoginSignup = () => {
  // const [showBackgroundImage, setShowBackgroundImage] = useState(true);

  // useEffect(() => {
  //   // Optionally, perform any logic before deciding to show the background image

  //   // Toggle the CSS class on the body element
  //   document.body.classList.toggle('background-image', showBackgroundImage);

  //   // Optionally, you can clear the class when the component is unmounted
  //   return () => {
  //     document.body.classList.remove('background-image');
  //   };
  // }, [showBackgroundImage]);

  useEffect(() => {
    // Set linear gradient for the entire body
    document.body.style.background = "linear-gradient(5deg, rgba(0,0,0,1) 0%, rgba(29,175,195,1) 35%)";
  
    // Set background color for the entire body
    document.body.style.backgroundColor = "#1dafc3";
  
    // Optionally, clear the styles when the component is unmounted
    return () => {
      document.body.style.background = "";
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="wrapper">
      <form action="">
        <h1>Sign Up</h1>
        <div className="input-box">
          <div className="input-field">
            <input type="text" placeholder="Full Name" required />
            <FaUser size={20} className="icon" />
          </div>

          <div className="input-field">
            <input type="text" placeholder="Username" required />
            <FaUser size={20} className="icon" />
          </div>

          <div className="input-field">
            <input type="email" placeholder="Email" required />
            <FaEnvelope size={20} className="icon" />
          </div>

          <div className="input-field">
            <input type="number" placeholder="Phone Number" required />
            <FaPhone size={20} className="icon" />
          </div>

          <div className="input-field">
            <input type="password" placeholder="Password" required />
            <FaLock size={20} className="icon" />
          </div>

          <div className="input-field">
            <input type="password" placeholder="Confirm Password" required />
            <FaLock size={20} className="icon" />
          </div>
        </div>
        <div className="linkToSignUpDiv">
              <h3>Already have an accaunt?</h3>
              <Link  className="link" to="/">Log In</Link>
          </div>
         
        <button  type="submit" className="btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default LoginSignup;
