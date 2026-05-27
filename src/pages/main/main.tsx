import { Download, Mail } from "lucide-react";
import "./main.css";

const JackMain = () => {
  return (
    <section id="main" className="section hero">
      {/* Avatar + badge */}
      <div className="hero-top">
        <div className="avatar-wrapper">
          {/*
            Replace /avatar.jpg with your actual professional photo.
            Recommended: square image, at least 200×200px.
          */}
          <img
            src="/avatar.jpg"
            alt="Jack Murrieta"
            className="avatar"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="avatar-fallback" aria-hidden="true">JM</div>
        </div>

        <span className="availability-badge">
          <span className="badge-dot" />
          Open to internship opportunities
        </span>
      </div>

      {/* Heading */}
      <h1 className="hero-title">
        Hi, I'm <span className="hero-name">Jack Murrieta</span>
      </h1>

      {/* Description */}
      <p className="hero-description">
        Software Engineering student at Instituto Tecnológico de Sonora, based
        in Sonora, Mexico — focused on backend and distributed systems.{" "}
        <strong className="highlight">
          I specialize in software architecture, design patterns, and building
          scalable server-side applications with Java.
        </strong>
      </p>

      {/* CTAs */}
      <div className="hero-actions">
        <a
          href="mailto:jack.murrieta252851@potros.itson.edu.mx"
          className="action-btn action-btn--primary"
        >
          <Mail size={16} />
          Contact me
        </a>

        <a
          href="cv/CV_JackMurrieta.pdf"
          download="CV_JackMurrieta.pdf"
          className="action-btn"
        >
          <Download size={16} />
          Download CV
        </a>
      </div>
    </section>
  );
};

export default JackMain;
