import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  Header,
  WhatREACTOR,
} from "./containers";
import { Cta, Brand, Navbar, LoginSignup } from "./components";
import LoginPage from "./components/loginSignup/loginPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/SignUp" element={<LoginSignup />} />
        <Route
          path="/WebSite"
          element={
            <div className="App">
              <div className="gradient__bg">
                <Navbar />
                <Header />
                <Brand />
                <WhatREACTOR />
                <Features />
                <Possibility />
                <Cta />
                <Blog />
                <Footer />
              </div>
            </div>
          }
        />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
