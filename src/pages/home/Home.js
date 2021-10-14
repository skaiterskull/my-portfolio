import React from "react";
import { NavBar } from "../../components/navbar/Navbar";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-navbar">
        <NavBar />
      </div>
      <div className="home-content">
        <div className="home-main-description">
          <h2 className="typing-animation">Hi, I am Hendra Wijaya.</h2>
          <p>Full stack web developer specialized in MERN stack.</p>
        </div>
      </div>
    </div>
  );
};
