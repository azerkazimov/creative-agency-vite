import { useProducts } from "@/store/useProducts";
import { useSidebar } from "@/store/useSidebar";
import { ShoppingCart } from "lucide-react";
import "./sidebar.css";

export default function Sidebar() {
  const { closeSidebar } = useSidebar();
  const { products } = useProducts();
  return (
    <div className="sidebar">
      {products.length > 0 ? (
        <div className="products-list">
          {products.map((app) => (
            <div className="product-card" key={app.id}>
              <img src={app.img} alt={app.title} />
              <h3>{app.title}</h3>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-cart">
          <div className="empty-icon">
            <ShoppingCart size={36} />
          </div>
          <h3>Your cart is empty</h3>
          <p>Add some delicious Starbucks beverages to get started!</p>
          <button className="btn btn-primary" onClick={closeSidebar}>
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
}
