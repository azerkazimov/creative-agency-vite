import { useProducts } from "@/store/useProducts";
import { useSidebar } from "@/store/useSidebar";
import { ShoppingCart, X } from "lucide-react";
import "./sidebar.css";
import SidebarCard from "./sidebar-product-card";

export default function Sidebar() {
  const { closeSidebar, isSidebarOpen } = useSidebar();
  const { products } = useProducts();

  return (
    <>
      {isSidebarOpen && (
        <div className="sidebar-backdrop" onClick={closeSidebar}></div>
      )}
      <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="sidebar-header">
          <h2>Your Cart</h2>
          <div className="close-btn" onClick={closeSidebar}>
            <X size={20} />
          </div>
        </div>
        {products.length > 0 ? (
          <div className="products-list">
            {products.map((app) => (
              <SidebarCard app={app} key={app.id} />
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
    </>
  );
}
