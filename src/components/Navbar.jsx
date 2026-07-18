import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Navbar.css";

const Navbar = () => {

  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">

      <div
        className="logo"
        onClick={() => scrollToSection("home")}
      >
        🛒 <span>ShopEase</span>
      </div>

      <ul className="nav-links">

        <li onClick={() => scrollToSection("home")}>
          Home
        </li>

        <li onClick={() => scrollToSection("products")}>
          Products
        </li>

        <li onClick={() => scrollToSection("categories")}>
          Categories
        </li>

        <li onClick={() => scrollToSection("cart")}>
          Cart
          <span className="cart-badge">
            {cartCount}
          </span>
        </li>

      </ul>

    </nav>
  );
};

export default Navbar;