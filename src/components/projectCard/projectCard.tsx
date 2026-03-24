import React from "react";
import "./projectCard.css";

export interface Project {
  title: string;
  period: string;
  stack: string[];
  bullets: string[];
  status?: "completed" | "in-progress";
}

interface Props {
  project: Project;
  image: string;
  repoUrl?: string;
  previewUrl?: string;
}

const ProjectCard: React.FC<Props> = ({
  project,
  image,
  repoUrl,
  previewUrl,
}) => {
  return (
    <div className="project-card">
      {/* IMAGE */}
      <div className="project-card__image">
        <img src={image} alt={project.title} />
      </div>

      {/* CONTENT */}
      <div className="project-card__content">
        {/* HEADER */}
        <div className="project-card__header">
          <h3>{project.title}</h3>
          <span className={`status ${project.status}`}>
            {project.status === "in-progress" ? "In Progress" : "Completed"}
          </span>
        </div>

        <p className="period">{project.period}</p>

        {/* STACK */}
        <div className="stack">
          {project.stack.map((tech, index) => (
            <span key={index} className="badge">
              {tech}
            </span>
          ))}
        </div>

        {/* DESCRIPTION */}
        <ul className="bullets">
          {project.bullets.slice(0, 2).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* ACTIONS */}
        <div className="actions">
          {repoUrl && (
            <a href={repoUrl} target="_blank" className="btn">
              Code
            </a>
          )}
          {previewUrl && (
            <a href={previewUrl} target="_blank" className="btn secondary">
              Preview
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;