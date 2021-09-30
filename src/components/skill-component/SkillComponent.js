import React from "react";
import "./Skill-component.css";
import bgreact from "../../assets/react.png";
import bgredux from "../../assets/redux.png";
import bghtml from "../../assets/html.png";
import bgcss from "../../assets/css.png";
import bgnode from "../../assets/node.png";
import bgexpress from "../../assets/express.png";
import bgrest from "../../assets/restapi.png";
import bgmysql from "../../assets/mysql.png";
import bgmongo from "../../assets/mongoDB.png";
import bgvercel from "../../assets/vercel.png";
import bgheroku from "../../assets/heroku.png";
import bgatlas from "../../assets/atlas.png";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export const SkillComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in",
      delay: 100,
      once: true,
    });
  }, []);

  const skills = [
    {
      ctgry: "Frontend",
      skill: [
        { name: "Html 5", image: bghtml, color: "#ff5722" },
        { name: "CSS 3", image: bgcss, color: "#0b51c1" },
        { name: "React", image: bgreact, color: "#01ffff" },
        { name: "React-Redux", image: bgredux, color: "#764abc" },
      ],
      color: "skyblue",
      transition: "fade-right",
    },
    {
      ctgry: "Backend",
      skill: [
        { name: "Node.js", image: bgnode, color: "#8cc64d" },
        { name: "Express.js", image: bgexpress, color: "#f7df1e" },
        { name: "REST Api", image: bgrest, color: "#00619e" },
      ],
      color: "limegreen",
      transition: "fade-left",
    },
    {
      ctgry: "Database",
      skill: [
        { name: "MySQL", image: bgmysql, color: "#cd7f00" },
        { name: "MongoDB", image: bgmongo, color: "#419f39" },
      ],
      color: "#fa0efd",
      transition: "fade-right",
    },
    {
      ctgry: "Deployment",
      skill: [
        { name: "Vercel", image: bgvercel, color: "black" },
        { name: "Heroku", image: bgheroku, color: "#420098" },
        { name: "Atlas", image: bgatlas, color: "#419f39" },
      ],
      color: "#ff1a75",
      transition: "fade-left",
    },
  ];

  return (
    <>
      {skills.map((item) => {
        return (
          <div className="skills-wrapper" data-aos={item.transition}>
            <div className="skill">
              <div className="skill-title" style={{ background: item.color }}>
                <h2>{item.ctgry}</h2>
              </div>
              <div className="skill-list">
                {item.skill.map((row) => {
                  return (
                    <div className="skill-item">
                      <img src={row.image} alt=""></img>
                      <span style={{ color: row.color }}>{row.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
