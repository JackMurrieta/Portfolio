import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./header.css";

// Update LINKEDIN_URL with your actual LinkedIn profile
const GITHUB_URL = "https://github.com/JackMurrieta";
const LINKEDIN_URL = "https://www.linkedin.com/in/jack-murrieta/";

const Header: React.FC = () => {
  const [active, setActive] = useState("main");

  const handleScroll = (id: string) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "main", label: "Home" },
    { id: "stack", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={active === item.id ? "active" : ""}
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-divider" aria-hidden="true" />

        <div className="header-social">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <FaGithub size={16} />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <FaLinkedin size={16} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
