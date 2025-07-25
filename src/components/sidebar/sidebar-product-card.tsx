import { useProducts } from "@/store/useProducts";
import { Trash2 } from "lucide-react";
import "./sidebar.css";
import Button from "../ui/button/button";
import ButtonCollection from "../button-collection/button-collection";

interface SidebarCardProps {
  id: number;
  img: string;
  title: string;
  quantity: number;
}

export default function SidebarCard({ app }: { app: SidebarCardProps }) {
  const { removeProduct, increaseQuantity, decreaseQuantity } = useProducts();

  const handleRemove = (id: number) => {
    removeProduct(id);
  };

  const handleIncrease = (id: number) => {
    increaseQuantity(id);
  };
  const handleDecrease = (id: number) => {
    decreaseQuantity(id);
  };

  return (
    <div className="product-card">
      <div className="product-description">
        <img src={app.img} alt={app.title} />
        <h3>{app.title}</h3>
        <ButtonCollection>
          <Button
            className="btn-sidebar"
            onClick={() => handleDecrease(app.id)}
          >
            -
          </Button>
          <span>{app.quantity}</span>
          <Button
            className="btn-sidebar"
            onClick={() => handleIncrease(app.id)}
          >
            +
          </Button>
        </ButtonCollection>
      </div>

      <div className="remove-btn" onClick={() => handleRemove(app.id)}>
        <Trash2 size={28} />
      </div>
    </div>
  );
}
