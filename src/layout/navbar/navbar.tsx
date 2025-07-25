import ButtonCollection from "@/components/button-collection/button-collection";
import Sidebar from "@/components/sidebar/sidebar";
import { useProducts } from "@/store/useProducts";
import { useSidebar } from "@/store/useSidebar";
import type { AuthUser } from "@/types/auth-user/auth-user";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import "./navbar.css";

interface NavbarProps {
  isAutentificated: boolean;
  user: AuthUser | null;
  onLogout: () => void;
}

export default function Navbar({
  isAutentificated,
  user,
  onLogout,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const { isSidebarOpen, openSidebar } = useSidebar();
  const { products } = useProducts();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <header className="header">
          <div className="logo">
            <a href="/">
              <img src="/logo.png" alt="" />
            </a>
          </div>
          <nav className="nav-menu">
            <ul className="menu-list">
              <li className="menu-item">
                <a href="/">Home</a>
              </li>
              <li className="menu-item">
                <a href="/about">About</a>
              </li>
              <li className="menu-item">
                <a href="/service">Service</a>
              </li>
              <li className="menu-item">
                <a href="/project">Project</a>
              </li>
            </ul>
          </nav>

          <Sidebar />

          <ButtonCollection>
            {isAutentificated ? (
              <>
                <div className="shopping" onClick={openSidebar}>
                  <ShoppingCart />
                  {products.length > 0 ? (
                    <span className="product-count">{products.length}</span>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="avatar-container">
                  <div className="avatar" onClick={toggleDropdown}></div>
                  <span className="avatar-user-name">
                    {user?.name ? user.name.charAt(0).toUpperCase() : ""}
                  </span>
                  {dropdown && (
                    <div className="dropdown-menu">
                      <button className="dropdown-item" onClick={onLogout}>
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="auth-btn">
                  <a href="/auth/login">Login</a>
                </div>
                <div className="auth-btn">
                  <a href="/auth/register">Register</a>
                </div>
              </>
            )}
            <div className="nav-btn">
              <button className="btn btn-transparent">Contact</button>
            </div>
          </ButtonCollection>
        </header>
      </div>
    </nav>
  );
}
