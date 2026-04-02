import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaGithub } from "react-icons/fa";
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
  media: string[];
  repoUrl?: string;
  previewUrl?: string;
}

const ProjectCard: React.FC<Props> = ({
  project,
  media,
  repoUrl,
  previewUrl,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplayPlugin = Autoplay({
    delay: 3000,
    stopOnMouseEnter: true,
    stopOnInteraction: false,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplayPlugin,
  ]);

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
  const statusLabel =
    project.status === "in-progress" ? "In Progress" : "Completed";

  return (
    <div className="project-card">
      {/* ── MEDIA ── */}
      <div className="project-card__media">
        <span className={`pc-status pc-status--${statusMod}`}>
          {statusLabel}
        </span>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {media.map((src, i) => (
              <div className="embla__slide" key={i}>
                <img
                  src={src}
                  alt={`${project.title} ${i + 1}`}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        {media.length > 1 && (
          <div className="embla__dots">
            {media.map((_, i) => (
              <button
                key={i}
                className={`embla__dot ${i === selectedIndex ? "active" : ""}`}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── CONTENIDO ── */}
      <div className="project-card__content">
        <div className="project-card__header">
          <h3>{project.title}</h3>
          <p className="period">{project.period}</p>
        </div>

        <div className="stack">
          {project.stack.map((tech, i) => (
            <span key={i} className="badge">
              {tech}
            </span>
          ))}
        </div>

        <ul className="bullets">
          {project.bullets.slice(0, 2).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="actions">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <FaGithub size={14} />
              Code
            </a>
          )}
          {previewUrl && (
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
