import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import "./Home.css";
import bghome from "../../assets/home-picture.png";

export const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-navbar">
        <Navbar />
      </div>
      <div className="home-content">
        <div className="home-main-description">
          <h2>Hi, I am Hendra Wijaya</h2>
          <p>Full stack web developer specialized in MERN stack.</p>
        </div>
      </div>
    </div>
  );
};
