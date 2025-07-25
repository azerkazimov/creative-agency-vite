
import type { ReactNode } from "react";
import "./service-card.css"

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  background: string
}

export default function ServiceCard({ icon, title, background }: ServiceCardProps) {
    const dynamicStyles = {
        backgroundColor: background
    }

  return (
    <div className="service-card">
      <div className="service-card-icon" style={dynamicStyles}>{icon}</div>
      <div className="service-card-title">{title}</div>
    </div>
  );
}