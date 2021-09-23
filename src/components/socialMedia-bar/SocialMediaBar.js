import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./SocialMediaBar.css";

export const SocialMediaBar = () => {
  return (
    <Router>
      <div className="sm-bar">
        <ul>
          <li className="sm-bar-item ">
            <a className="item-facebook" href="">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li className="sm-bar-item">
            <a className="item-instagram" href="">
              <i class="">
                <i class="fab fa-instagram"></i>
              </i>
            </a>
          </li>
          <li className="sm-bar-item">
            <a className="item-github" href="">
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      ;
    </Router>
  );
};
