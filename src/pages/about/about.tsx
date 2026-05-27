import React from "react";
import "./about.css";

const SOFT_SKILLS = [
  "Team collaboration",
  "Technical communication",
  "Self-directed learning",
  "Attention to detail",
  "Problem solving",
];

const LEARNING = ["Kubernetes", "Kafka", "Rust"];

const About: React.FC = () => (
  <section id="about" className="about-section">
    <h2 className="about-title">About me</h2>

    <div className="about-grid">
      <div className="about-bio">
        <p>
          I'm a Software Engineering student at ITSON (Instituto Tecnológico de
          Sonora), passionate about distributed systems and backend architecture.
          I enjoy working on challenging problems that require careful system
          design and I'm always looking for opportunities to apply what I learn
          in real projects.
        </p>
        <p>
          I value clean architecture, honest documentation, and building things
          that actually work in production. Currently looking for internship
          opportunities where I can contribute and keep growing.
        </p>
      </div>

      <div className="about-sidebar">
        <div className="about-block">
          <h3>Soft skills</h3>
          <div className="skill-tags">
            {SOFT_SKILLS.map((s) => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>

        <div className="about-block">
          <h3>Currently exploring</h3>
          <div className="skill-tags">
            {LEARNING.map((t) => (
              <span key={t} className="skill-tag skill-tag--learning">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
