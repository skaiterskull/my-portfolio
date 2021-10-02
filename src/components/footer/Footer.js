import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  const time = new Date();
  const year = time.getFullYear();
  return (
    <div className="wrapper-footer">
      <div className="footer-top">
        <div className="footer-menu">
          <div className="footer-title">Navigator</div>
          <div className="footer-list">
            <ul>
              <li>
                <Link to="/">
                  <span className="project-span-text">
                    <i class="fas fa-home"></i>
                  </span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/skills">
                  <span className="project-span-text">
                    <i class="fas fa-tasks"></i>
                  </span>
                  <span>Skills</span>
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <span className="project-span-text">
                    <i class="fab fa-r-project"></i>
                  </span>
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link to="contact-me">
                  <span className="project-span-text">
                    <i class="far fa-address-book"></i>
                  </span>
                  <span>Contact Me</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-sm">
          <div className="footer-title">Find Me on Social Media</div>
          <div className="footer-list">
            <ul>
              <li>
                <a href="/">
                  <span className="project-span-text">
                    <i class="fab fa-facebook-square"></i>
                  </span>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="project-span-text">
                    <i class="fab fa-instagram-square"></i>
                  </span>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="project-span-text">
                    <i class="fab fa-github-square"></i>
                  </span>
                  <span>Github</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-">
          <div className="footer-title">Contact Me</div>
          <div className="footer-list">
            <ul>
              <li>
                <span className="project-span-text">
                  <i class="fas fa-map-marker-alt"></i>
                </span>
                <span>Wolli Creek, Sydney</span>
              </li>
              <li>
                <span className="project-span-text">
                  <i class="fas fa-envelope"></i>
                </span>
                <span>hendra.here@yahoo.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {year} Hendra Wijaya. All rights reserved.
      </div>
    </div>
  );
};
