import React from "react";
import "./badgeButton.css";

interface BadgeButtonProps {
  label: string;
  href?: string;
  color?: string;
  icon?: React.ReactNode;
}

const BadgeButton: React.FC<BadgeButtonProps> = ({
  label,
  href,
  color = "#64748b", // gris neutro para badges sin color explícito
  icon,
}) => {
  const content = (
    <div
      className="badge-button"
      data-label={label}
      style={{ "--badge-color": color } as React.CSSProperties}
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
