import React from "react";
import ProjectCard from "../../components/projectCard/projectCard";
import { projects } from "../../data/projects";
import "./project.css";

const ProjectsSection: React.FC = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* HEADER */}
        <div className="projects-header">
          <h2>Projects</h2>
          <p>
            A selection of projects focused on scalable architecture,
            performance, and real-world impact.
          </p>
        </div>

        {/* PROJECT LIST */}
        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              image={`/images/project-${index}.png`}
              repoUrl="#"
              previewUrl="#"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
