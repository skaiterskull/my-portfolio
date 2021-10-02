import React from "react";
import { SocialMediaBar } from "../socialMedia-bar/SocialMediaBar";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import "./PageLayout.css";

export const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <div className="nav-wrapper">
        <nav>
          <Navbar />
        </nav>
      </div>
      <div className="main-content-wrapper">
        <div className="main-content">{children}</div>
      </div>
      <div className="footer-wrapper">
        <div className="footer">
          <Footer />
        </div>
      </div>
      <div className="social-media">
        <SocialMediaBar />
      </div>
    </div>
  );
};
