import React from "react";
import { SocialMediaBar } from "../socialMedia-bar/SocialMediaBar";
import { Navbar } from "../navbar/Navbar";
import "./PageLayout.css";

export const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <nav>
        <Navbar />
      </nav>
      <div className="main-content">{children}</div>
      <div className="social-media">
        <SocialMediaBar />
      </div>
    </div>
  );
};
