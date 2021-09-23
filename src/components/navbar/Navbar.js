import React from "react";
import "./Navbar.css";
import { Link, BrowserRouter as Router } from "react-router-dom";

export const Navbar = () => {
  return (
    <Router>
      <div className="navbar">
        <div className="navbar-right">
          <span>Hi I'm Hendra</span>
        </div>
        <div className="navbar-left">
          <ul>
            <li>
              <Link to="/">Skills</Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
};
