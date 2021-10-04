import React, { useState } from "react";
import "./Project.css";
import { PageLayout } from "../../components/page-layout/PageLayout";
import { CustomModal } from "../../components/custom-modal/CustomModal";
import bgntdtl from "../../assets/ntdtl.png";
import bgcalc from "../../assets/calculator.png";
import bgfruit from "../../assets/searchfruit.png";
import bgportfolio from "../../assets/portfolio.png";
import bgcommerce from "../../assets/ecommerce.png";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in",
      delay: 100,
      once: true,
    });
  }, []);

  const projectsData = [
    {
      image: bgcommerce,
      name: "E-commerce",
      tech: [
        "React",
        "React-bootstrap",
        "React-redux",
        "Javascript",
        "Express.js",
        "Node.js",
        "MongoDB",
        "AWS",
      ],
      description:
        "E-commerce site created with MERN stack. It has two main function, first is the admin page for the admin and the other one is for the client. ",
      link: {
        github: "https://github.com/skaiterskull/ADmin-cms",
        url: "",
      },
    },
    {
      image: bgntdtl,
      name: "Task Management",
      tech: [
        "React",
        "React-bootstrap",
        "React-redux",
        "Javascript",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Heroku",
      ],
      description:
        "The task management allows you to manage your task/s or activities. First, you can input your task/s and then review and decide if the task/s can be categorised as not to do task list, and based on that you can see how many hours you could have saved a week and use that hours for other useful task/s. ",
      link: {
        github: "https://github.com/skaiterskull/api-nottodolist",
        url: "http://not-to-do-221.herokuapp.com/",
      },
    },
    {
      image: bgcalc,
      name: "Prank Calculator",
      tech: ["HTML", "CSS", "Javascript"],
      description:
        "This project is a simple project built using HTML, CSS, and Javascript. The prank calculator will allow you to do a calculator function but be careful, you might get pranked 😋 by this Prank Calculator! ",
      link: {
        github: "https://github.com/skaiterskull/react_prank_calculator",
        url: "",
      },
    },
    {
      image: bgfruit,
      name: "Search Your Fruit",
      tech: ["React", "Javascript", "Node.js", "Express.js", "MongoDB"],
      description:
        "A simple full-stack application built using React as frontend, Express JS as backend, and MongoDB. This application will allow you to search the fruit based on the data in database.",
      link: {
        github: "https://github.com/skaiterskull/search-your-fruit",
        url: "",
      },
    },
    {
      image: bgportfolio,
      name: "My Portfolio",
      tech: ["React", "React-bootstrap", "React-router-dom"],
      description:
        "My professional portfolio website built using React and with help of the React-router-dom, its become a multipage React website.",
      link: {
        github: "https://github.com/skaiterskull/my-portfolio",
        url: "",
      },
    },
  ];

  const [modalShow, setModalShow] = useState(false);
  const [selected, setSelected] = useState({});

  const handleOnClick = (name, tech, description, link) => {
    setModalShow(true);
    setSelected({ name, tech, description, link });
  };

  const { tech } = selected;
  const { link } = selected;

  return (
    <div>
      <PageLayout>
        <div className="projects-wrapper" data-aos="fade-up">
          <h2>Project Galery</h2>
          <p>Welcome to my projects. Here are some highlight of my projects.</p>
          <div className="project">
            {projectsData.map((value) => {
              return (
                <div className="project-card">
                  <img className="project-image" src={value.image} alt="" />
                  <div className="card-text">
                    <h3 className="card-title">{value.name}</h3>
                    <button
                      to="/"
                      className="card-detail"
                      onClick={() =>
                        handleOnClick(
                          value.name,
                          value.tech,
                          value.description,
                          value.link
                        )
                      }
                    >
                      View All
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </PageLayout>

      {/*Project description in modal form*/}
      <CustomModal
        title={selected.name}
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <p className="project-description">{selected.description}</p>
        <div className="project-detail">
          <div className="project-technologt">
            <span className="techs">Technology : </span>
            {tech?.map((item) => (
              <span className="techs">{item} | </span>
            ))}
          </div>
          <div className="project-link">
            <ul className="link-list">
              <li>
                <a href={link?.github} target="_blank" rel="noreferrer">
                  <i class="fab fa-github-alt"></i>
                </a>
              </li>
              <li>
                <a href={link?.url} target="_blank" rel="noreferrer">
                  <i class="fas fa-external-link-square-alt"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};
