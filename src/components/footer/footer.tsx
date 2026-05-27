import React from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer: React.FC = () => (
  <footer className="footer" id="contact">
    <div className="footer-inner">
      <p className="footer-name">Jack Murrieta</p>
      <p className="footer-tagline">Software Engineering Student · Backend & Distributed Systems</p>

      <div className="footer-links">
        <a href="https://github.com/JackMurrieta" target="_blank" rel="noopener noreferrer">
          <FaGithub size={16} />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/jackmurrieta/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={16} />
          LinkedIn
        </a>
        <a href="mailto:jack.murrieta252851@potros.itson.edu.mx">
          <Mail size={16} />
          Email
        </a>
      </div>

      <p className="footer-copy">© {new Date().getFullYear()} Jack Murrieta · Built with React & TypeScript</p>
    </div>
  </footer>
);

export default Footer;
