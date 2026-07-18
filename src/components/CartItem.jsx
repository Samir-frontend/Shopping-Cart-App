const CartItem = ({
  item,
  increaseQty,
  decreaseQty,
  removeItem,
}) => {
  return (
    <div className="cart-item">
      <div className="cart-left">
        <img src={item.image} alt={item.name} />

        <div className="cart-details">
          <h4>{item.name}</h4>
          <p className="cart-price">₹ {item.price}</p>
        </div>
      </div>

      <div className="cart-actions">

        <div className="qty-box">
          <button onClick={() => decreaseQty(item.id)}>
            −
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => increaseQty(item.id)}>
            +
          </button>
        </div>

        <button
          className="remove-btn"
          onClick={() => removeItem(item.id)}
        >
          🗑 Remove
        </button>

      </div>
    </div>
  );
};

export default CartItem;