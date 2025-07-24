import type { PortfolioProps } from "@/types/portfolio-data/portfolio-types";
import { ShoppingBasket } from "lucide-react";
import "./slider.css";
import { useProducts } from "@/store/useProducts";

export default function SliderCard({ slider }: { slider: PortfolioProps }) {
  const { addProduct } = useProducts();

  const handleAddToCart = () => {
    addProduct(slider);
  };

  return (
    <div className="slider-card">
      <img src={slider.img} alt={slider.title} className="slider-image" />
      <div className="slider-card-content">
        <h3>{slider.title}</h3>
        <div className="shopping-button" onClick={handleAddToCart}>
          <ShoppingBasket />
        </div>
      </div>
    </div>
  );
}
