import React, { useState } from "react";
import "./header.css";

const Header: React.FC = () => {
  const [active, setActive] = useState("experience");

  const handleScroll = (id: string) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "main", label: "Main" },
    { id: "stack", label: "Tech Stack & Tools" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About me" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="header">
      <div className="header-container">
        {/* Navigation */}
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
      </div>
    </header>
  );
};

export default Header;
