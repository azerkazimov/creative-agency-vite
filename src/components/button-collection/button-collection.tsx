import type { CSSProperties } from "react";
import "./button-collection.css"

interface ButtonCollectionProps {
  children: React.ReactNode;
  position?: CSSProperties["justifyContent"];
}

export default function ButtonCollection({ children, position }: ButtonCollectionProps) {
  const dinamicStyles = {
    justifyContent: position,
  };
  
  return (
    <div className="btn-collection" style={dinamicStyles}>
      {children}
    </div>
  );
}
