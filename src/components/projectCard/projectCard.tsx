import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaGithub } from "react-icons/fa";
import type { Project } from "../../types";
import "./projectCard.css";

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: "#61dafb",
  Backend: "#6db33f",
  "Full Stack": "#f89820",
  Systems: "#c084fc",
};

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const hasMedia = project.media.length > 0;

  const autoplayRef = useRef(
    Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    hasMedia ? [autoplayRef.current] : []
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const statusMod = project.status ?? "completed";
  const statusLabel = project.status === "in-progress" ? "In Progress" : "Completed";
  const categoryColor = CATEGORY_COLORS[project.category] ?? "#64748b";

  return (
    <div className="project-card">
      {/* MEDIA */}
      <div className="project-card__media">
        <span className={`pc-status pc-status--${statusMod}`}>{statusLabel}</span>
        <span
          className="pc-category"
          style={{ "--cat-color": categoryColor } as React.CSSProperties}
        >
          {project.category}
        </span>

        {hasMedia ? (
          <>
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                {project.media.map((src, i) => (
                  <div className="embla__slide" key={i}>
                    <img src={src} alt={`${project.title} screenshot ${i + 1}`} draggable={false} />
                  </div>
                ))}
              </div>
            </div>
            {project.media.length > 1 && (
              <div className="embla__dots">
                {project.media.map((_, i) => (
                  <button
                    key={i}
                    className={`embla__dot ${i === selectedIndex ? "active" : ""}`}
                    onClick={() => emblaApi?.scrollTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="project-card__placeholder">
            <span
              className="placeholder-initial"
              style={{ color: categoryColor }}
            >
              {project.title.charAt(0)}
            </span>
            <span className="placeholder-label">No preview available</span>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="project-card__content">
        <div className="project-card__header">
          <h3>{project.title}</h3>
          <p className="period">{project.period}</p>
        </div>

        <div className="stack">
          {project.stack.map((tech) => (
            <span key={tech} className="badge">{tech}</span>
          ))}
        </div>

        <ul className="bullets">
          {project.bullets.slice(0, 2).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="actions">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn">
              <FaGithub size={14} />
              Code
            </a>
          )}
          {project.previewUrl && (
            <a href={project.previewUrl} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Preview
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
