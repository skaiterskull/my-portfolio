import React from "react";
import { PageLayout } from "../../components/page-layout/PageLayout";
import "./Project.css";
import bgntdtl from "../../assets/not.jpg";
import { Link } from "react-router-dom";

export const Project = () => {
  return (
    <div>
      <PageLayout>
        <div className="projects-wrapper">
          <h2>My Project</h2>
          <p>Welcome to my projects page. </p>
          <div className="project">
            <div className="project-card">
              <img className="project-image" src={bgntdtl} alt="" />
              <div className="card-text">
                <h3 className="card-title">Project Details</h3>
                <Link to="/" className="card-detail">
                  <i class="fas fa-external-link-square-alt"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};
