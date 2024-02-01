import React, { useEffect } from "react";
import "./loginsignup.css";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";

const LoginSignup = () => {
  const setBodyBackgroundImage = () => {
    document.body.style.backgroundImage = 'url("/image.jpg")'; // Replace with the URL of your image
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
  };
  useEffect(() => {
    setBodyBackgroundImage();
  }, []);

  return (
    <div className="wrapper">
      <form action="">
        <h1>Registration</h1>
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
        <label>
          <input type="checkbox" />I herebly declare that the above information
          provided is true and correct.
        </label>

        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default LoginSignup;
