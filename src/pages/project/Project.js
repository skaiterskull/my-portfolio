import React, { useState } from "react";
import "./Project.css";
import { PageLayout } from "../../components/page-layout/PageLayout";
import bgntdtl from "../../assets/not.jpg";
import { CustomModal } from "../../components/custom-modal/CustomModal";

export const Project = () => {
  const projectsData = [
    {
      image: bgntdtl,
      name: "Task Management",
      tech: [
        { techName: "React", color: "lightblue" },
        { techName: "Javascript", color: "yellow" },
      ],
      description: "This is task management build to help you manage your task",
    },
    {
      image: bgntdtl,
      name: "Task Management 1",
      tech: [
        { techName: "React", color: "lightblue" },
        { techName: "Javascript", color: "yellow" },
      ],
      description:
        "This is task management build to help you manage your task 1",
    },
    {
      image: bgntdtl,
      name: "Task Management 2",
      tech: [
        { techName: "React", color: "lightblue" },
        { techName: "Javascript", color: "yellow" },
      ],
      description:
        "This is task management build to help you manage your task 2",
    },
  ];

  const [modalShow, setModalShow] = useState(false);
  const [selected, setSelected] = useState({});

  const handleOnClick = (name, tech, description) => {
    setModalShow(true);
    setSelected({ name, tech, description });
  };

  const selectedTech = selected.tech;

  return (
    <div>
      <PageLayout>
        <div className="projects-wrapper">
          <h2>Project Galery</h2>
          <p>Welcome to my projects. Here are some highlight of my projects.</p>
          <div className="project">
            {projectsData.map((value) => {
              return (
                <div className="project-card">
                  <img className="project-image" src={bgntdtl} alt="" />
                  <div className="card-text">
                    <h3 className="card-title">{value.name}</h3>
                    <button
                      to="/"
                      className="card-detail"
                      onClick={() =>
                        handleOnClick(value.name, value.tech, value.description)
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
        <span>Technology : </span>
        {selectedTech?.map((item) => (
          <span className="techs" style={{ background: item.color }}>
            {item.techName}
          </span>
        ))}
        <div>{selected.description}</div>
      </CustomModal>
    </div>
  );
};
