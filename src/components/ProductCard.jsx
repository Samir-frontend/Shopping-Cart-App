import toast from "react-hot-toast";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="image-box">
        <div
  className="product-card"
  data-aos="zoom-in"
></div>
        <img src={product.image} alt={product.name} />
        <span className="badge">{product.category}</span>
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <div className="price-rating">
          <p className="price">₹{product.price}</p>
          <p className="rating">⭐ {product.rating}</p>
        </div>

        
        <button
  onClick={() => {
    addToCart(product);
    toast.success("Product Added Successfully");
  }}
>
  🛒 Add To Cart
</button>
      </div>
    </div>
  );
};

export default ProductCard;