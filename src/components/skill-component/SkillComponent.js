import React from "react";
import "./Skill-component.css";
import bgreact from "../../assets/react.png";
import bgredux from "../../assets/redux.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export const SkillComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in",
      delay: 100,
    });
  }, []);

  const skills = [
    {
      ctgry: "Frontend",
      skill: [
        { name: "Html 5", image: "fa-brands fa-html5" },
        { name: "CSS 3", image: "fa-brands fa-css3-alt" },
        { name: "React", image: "fa-brands fa-react" },
        { name: "React-Redux", image: "" },
      ],
    },
    {
      ctgry: "Backend",
      skill: [
        { name: "Node.js", image: "fa-brands fa-node-js" },
        { name: "Express.js", image: "" },
        { name: "REST Api", image: "" },
      ],
    },
    {
      ctgry: "Database",
      skill: [
        { name: "MySQL", image: "fa-solid fa-database" },
        { name: "MongoDB", image: "fa-solid fa-database" },
      ],
    },
    {
      ctgry: "Deployment",
      skill: [
        { name: "Vercel FrontEnd Deployment", image: "" },
        { name: "Heroku", image: "" },
        { name: "Atlas", image: "" },
      ],
    },
  ];

  return (
    <div className="skills-wrapper" data-aos="fade-right">
      <div className="skill">
        <div className="skill-title">
          <h2>Front End</h2>
        </div>
        <div className="skill-list">
          <div className="skill-item">
            <img src={bgreact} alt=""></img>
            <span style={{ color: "#01ffff" }}>React</span>
          </div>
          <div className="skill-item">
            <img src={bgredux} alt=""></img>
            <span style={{ color: "#764abc" }}>React-Redux</span>
          </div>
          <div className="skill-item">
            <img src={html} alt=""></img>
            <span style={{ color: "#ff5722" }}>HTML 5</span>
          </div>
          <div className="skill-item">
            <img src={css} alt=""></img>
            <span style={{ color: "#0b51c1" }}>CSS 3</span>
          </div>
        </div>
      </div>
    </div>
  );
};
