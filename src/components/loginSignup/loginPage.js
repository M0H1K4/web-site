import React from "react";
import "./loginPage.css";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom"; // Use HashRouter here
import LoginSignup from "./LoginSignup";
import { useState } from "react";

function loginPage() {
  return (
    <div className="wrapper2">
      <h1>Log In</h1>
      <form action="">
        <div className="input-box">
          <div className="input-field">
            <input type="text" placeholder="Username" required />
            <FaUser size={20} className="icon" />
          </div>
          <div className="input-field">
            <input type="password" placeholder="Password" required />
            <FaLock size={20} className="icon" />
          </div>
        </div>
        <div className="linkToSignUpDiv">
          <h3>Don't have an accaunt?</h3>
          <Link className="link2" to="/SignUp">
            Sign Up
          </Link>
        </div>
        <button type="submit" className="btn">
          <Link className="lol" to="/WebSite">
            Log In
          </Link>
        </button>
      </form>
    </div>
  );
}

export default loginPage;
