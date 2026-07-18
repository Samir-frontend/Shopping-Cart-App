import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import "../styles/Cart.css";

const Cart = () => {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeItem,
    totalPrice,
  } = useContext(CartContext);

  return (
    <section className="cart-section">
      <h2 className="cart-title">🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h3>Your Cart is Empty</h3>
          <p>Add products to start shopping.</p>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeItem={removeItem}
            />
          ))}

          <div className="total-card">
            <h2>Total Amount</h2>
            <h1>₹ {totalPrice}</h1>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;