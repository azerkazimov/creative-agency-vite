import { useStore } from "@/store/useStore";
import "./about.css";

export default function About() {
  const { count, increment, decrement } = useStore();

  return (
    <div className="about-page">
      <div className="container">
        <h1 className="quicksand">About page</h1>
        <div className="counter">
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}
