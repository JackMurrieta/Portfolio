import React from "react";
import ProjectCard from "../../components/projectCard/projectCard";
import { projects } from "../../data/projects";
import "./project.css";

const ProjectsSection: React.FC = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* ── HEADER ── */}
        <header className="projects-header">
          <h2>Projects</h2>
          <p>
            A selection of projects focused on scalable architecture,
            performance, and real-world impact.
          </p>
        </header>

        {/* ── PROJECT LIST ── */}
        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard
              key={project.title} // 🔥 mejor que index
              project={project}
              media={project.media ?? []} // 🔥 fallback seguro
              repoUrl={project.repoUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
