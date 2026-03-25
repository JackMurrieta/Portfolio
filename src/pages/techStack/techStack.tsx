import React from "react";
import "./techStack.css";
import BadgeButton from "../../components/badgeButton/badgeButton";
import {
  FaJava,
  FaReact,
  FaAngular,
  FaDocker,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiQuarkus,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiMysql,
  SiMongodb,
  SiNginx,
} from "react-icons/si";

const TechSkills: React.FC = () => {
  return (
    <section id="stack" className="tech-section">
      <h2 className="tech-title">Tech Stack & Tools</h2>
      <p className="tech-subtitle">
        Languages · Frameworks · Databases · Architecture
      </p>

      <div className="tech-grid">
        {/* LANGUAGES */}
        <div className="tech-card card-languages">
          <div className="tech-card-header">
            <span className="tech-card-dot" />
            <h3>Languages</h3>
          </div>
          <div className="tech-badges">
            <BadgeButton label="Java" icon={<FaJava />} color="#f89820" />
            <BadgeButton
              label="JavaScript"
              icon={<SiJavascript />}
              color="#f7df1e"
            />
            <BadgeButton
              label="TypeScript"
              icon={<SiTypescript />}
              color="#3178c6"
            />
            <BadgeButton label="HTML" icon={<SiHtml5 />} color="#e34c26" />
            <BadgeButton label="CSS" icon={<SiCss />} color="#264de4" />
            <BadgeButton label="Python" icon={<FaPython />} color="#3776ab" />
          </div>
        </div>

        {/* FRAMEWORKS */}
        <div className="tech-card card-frameworks">
          <div className="tech-card-header">
            <span className="tech-card-dot" />
            <h3>Frameworks</h3>
          </div>
          <div className="tech-badges">
            <BadgeButton
              label="Spring Boot"
              icon={<SiSpringboot />}
              color="#6db33f"
            />
            <BadgeButton label="Quarkus" icon={<SiQuarkus />} color="#4695eb" />
            <BadgeButton label="Angular" icon={<FaAngular />} color="#dd0031" />
            <BadgeButton label="React" icon={<FaReact />} color="#61dafb" />
          </div>
        </div>

        {/* DATABASES */}
        <div className="tech-card card-databases">
          <div className="tech-card-header">
            <span className="tech-card-dot" />
            <h3>Databases</h3>
          </div>
          <div className="tech-badges">
            <BadgeButton label="MySQL" icon={<SiMysql />} color="#00758f" />
            <BadgeButton label="MongoDB" icon={<SiMongodb />} color="#47a248" />
          </div>
        </div>

        {/* TOOLS & ARCHITECTURE */}
        <div className="tech-card card-tools">
          <div className="tech-card-header">
            <span className="tech-card-dot" />
            <h3>Tools & Architecture</h3>
          </div>
          <div className="tech-badges">
            <BadgeButton label="Docker" icon={<FaDocker />} color="#0db7ed" />
            <BadgeButton label="Git" icon={<FaGitAlt />} color="#f1502f" />
            <BadgeButton label="NGINX" icon={<SiNginx />} color="#009639" />
            <BadgeButton label="Microservices" />
            <BadgeButton label="gRPC" />
            <BadgeButton label="API Gateway" />
            <BadgeButton label="WebSockets" />
            <BadgeButton label="SOLID" />
            <BadgeButton label="Event-Driven" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
