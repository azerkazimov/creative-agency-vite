import "./error.css";

interface ErrorProps {
  error: {
    message?: string;
    status?: number;
  };
}

export default function Errors({ error }: ErrorProps) {
  return (
    <div className="error-wrapped">
      <h2>{error?.message || "An error occurred"}</h2>
      <p>{error?.status ? `Status: ${error.status}` : null}</p>
    </div>
  );
}
