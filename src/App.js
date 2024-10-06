// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Slideshow from "./components/Slideshow";
import Tool from "./components/Tool";
import james_webb from "./images/webb.jpg";

function MainPage() {
  return (
    <div
      className="main-page"
      style={{
        backgroundImage: `url(${james_webb})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center", // Center the image
        backgroundSize: "cover", // Scale to the farthest side
      }}
    >
      <h1 style={{ fontSize: "88px" }}>B Diezai</h1>
      <span>
        {" "}
        <Link to="/slideshow">
          <button className="enter-slideshow-button">Begin Journey</button>
        </Link>
        {/* <Link to="#">
          <button className="enter-slideshow-button">
            Tool - <span style={{ fontSize: "2.5rem" }}>Soon!</span>
          </button>
        </Link> */}
      </span>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/slideshow" element={<Slideshow />} />
      </Routes>
    </Router>
  );
}

export default App;
