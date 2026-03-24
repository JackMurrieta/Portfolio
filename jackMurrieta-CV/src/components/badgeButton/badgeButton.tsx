import React from "react";
import "./BadgeButton.css";

interface BadgeButtonProps {
  label: string;
  href?: string;
  color?: string;
  icon?: React.ReactNode;
}

const BadgeButton: React.FC<BadgeButtonProps> = ({
  label,
  href,
  color = "#0ea5e9",
  icon
}) => {
  const content = (
    <div
      className="badge-button"
      style={{
        "--badge-color": color
      } as React.CSSProperties}
    >
      {icon && <span className="badge-icon">{icon}</span>}
      <span className="badge-label">{label}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export default BadgeButton;