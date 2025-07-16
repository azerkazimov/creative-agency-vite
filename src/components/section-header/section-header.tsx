import type { CSSProperties } from "react";
import "./section-header.css";

interface SectionHeaderProps {
  highlight: string;
  content: string;
  position: CSSProperties["textAlign"];
}

export default function SectionHeader({ highlight, content, position }:SectionHeaderProps) {
  const dinamicStyles = {
    textAlign: position,
  };

  return (
    <div className="section-header" style={dinamicStyles}>
      <span className="section-header-highlight">{highlight}</span>
      <h2 className="section-header-content">{content}</h2>
    </div>
  );
}
