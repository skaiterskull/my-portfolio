import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-right">
        <div className="navright-text">Hi I'm Hendra</div>
        <div className="navbar-dropdown">
          <ul>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact-me">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-left">
        <ul>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact-me">Contact Me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
