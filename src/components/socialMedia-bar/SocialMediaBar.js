import React from "react";
import "./SocialMediaBar.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export const SocialMediaBar = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in",
      delay: 100,
      offset: 200,
    });
  }, []);
  return (
    <div className="sm-bar" data-aos="fade-left">
      <ul>
        <li className="sm-bar-item ">
          <a className="item-facebook" href="/">
            <i class="fab fa-facebook-square"></i>
          </a>
        </li>
        <li className="sm-bar-item">
          <a className="item-instagram" href="/">
            <i class="">
              <i class="fab fa-instagram"></i>
            </i>
          </a>
        </li>
        <li className="sm-bar-item">
          <a className="item-github" href="/">
            <i class="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
