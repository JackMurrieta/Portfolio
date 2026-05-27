import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import ProjectCard from "../../components/projectCard/projectCard";
import { projects } from "../../data/projects";
import type { ProjectCategory } from "../../types";
import "./project.css";

type FilterType = "All" | ProjectCategory;

const FILTERS: FilterType[] = ["All", "Frontend", "Backend", "Full Stack", "Systems"];

const sorted = [...projects].sort((a, b) => (a.position ?? 999) - (b.position ?? 999));
const featuredProjects = sorted.filter((p) => p.featured);
const secondaryProjects = sorted.filter((p) => !p.featured);

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>("All");

  const applyFilter = <T extends (typeof projects)[number]>(list: T[]) =>
    filter === "All" ? list : list.filter((p) => p.category === filter);

  const visibleFeatured = applyFilter(featuredProjects);
  const visibleSecondary = applyFilter(secondaryProjects);
  const hasResults = visibleFeatured.length > 0 || visibleSecondary.length > 0;

  return (
    <section className="projects-section" id="projects">
      {/* HEADER */}
      <header className="projects-header">
        <h2>Projects</h2>
        <p>A selection of projects focused on scalable architecture, performance, and real-world impact.</p>
      </header>

      {/* FILTERS */}
      <div className="projects-filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* FEATURED GRID */}
      {visibleFeatured.length > 0 && (
        <div className="projects-grid">
          {visibleFeatured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      )}

      {/* SECONDARY GRID */}
      {visibleSecondary.length > 0 && (
        <div className="projects-secondary">
          <h3 className="secondary-title">Other Projects</h3>
          <div className="secondary-grid">
            {visibleSecondary.map((project) => (
              <div key={project.title} className="compact-card">
                <div className="compact-card__top">
                  <h4>{project.title}</h4>
                  <span className="compact-period">{project.period}</span>
                </div>
                <p className="compact-desc">{project.bullets[0]}</p>
                <div className="compact-stack">
                  {project.stack.slice(0, 4).map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="compact-link"
                  >
                    <FaGithub size={13} />
                    View code
                  </a>
                )}
                {project.previewUrl && (
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="compact-link"
                  >
                    Live demo
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {!hasResults && (
        <p className="no-results">No projects in this category yet.</p>
      )}
    </section>
  );
};

export default ProjectsSection;
