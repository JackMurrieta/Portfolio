import { Mail } from "lucide-react";
import "./main.css";

const JackMain = () => {
  return (
    <section id="main" className="section hero">
      {/* Avatar + Badge row */}
      <div className="hero-top">
        <div className="avatar-wrapper">
          <img
            src="/avatar.jpg"
            alt="Jack Murrieta"
            className="avatar"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Fallback initials if no image */}
          <div className="avatar-fallback">JM</div>
        </div>

        <span className="availability-badge">
          <span className="badge-dot" />
          Looking for internship opportunities
        </span>
      </div>

      {/* Heading */}
      <h1 className="hero-title">
        Hi there, <span className="hero-name">I'm Jack Murrieta 👋</span>
      </h1>

      {/* Description */}
      <p className="hero-description">
        I'm a Software Engineering student at Instituto Tecnológico de Sonora,
        based in Sonora, Mexico, aiming for a career in backend and distributed
        systems engineering.{" "}
        <strong className="highlight">
          I specialize in software architecture, design patterns, and building
          scalable server-side applications using Java.
        </strong>{" "}
      </p>

      {/* CTA Buttons */}
      <div className="hero-actions">
        <a
          href="mailto:jack.murrieta252851@potros.itson.edu.mx"
          className="action-btn"
        >
          <Mail size={16} />
          Contact me
        </a>
      </div>
    </section>
  );
};

export default JackMain;
