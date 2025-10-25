import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./ProductCart.css";

export default function ProductCart() {
  const {
    products,
    cart,
    isLoading,
    isError,
    addToCart,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  if (isLoading) return <h1 className="loading">⏳ Loading products...</h1>;
  if (isError)
    return (
      <div className="error-container">
        <h2>⚠ Oops! Failed to load products. Check your internet connection.</h2>
        <button onClick={() => window.location.reload()}>🔄 Retry</button>
      </div>
    );

  return (
    <div className="cart-page">
      <h1 className="cart-title">🛍 Products List</h1>

      {/* 🟢 Product Section */}
      <div className="cart-container">
        {products.map((item) => (
          <div className="cart-card" key={item.id}>
            <img src={item.image} alt={item.title} className="cart-img" />
            <div className="cart-details">
              <h3>{item.title}</h3>
              <p className="cart-price">${item.price}</p>
              <button onClick={() => addToCart(item)} className="add-btn">
                ➕ Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🛒 Cart Section */}
      <h2 className="cart-title">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty 😢</h2>
          <p>Add some amazing items!</p>
        </div>
      ) : (
        <>
          <div className="cart-container">
            {cart.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={item.image} alt={item.title} className="cart-img" />
                <div className="cart-details">
                  <h3>{item.title}</h3>
                  <p className="cart-price">${item.price}</p>
                  <p className="cart-qty">Qty: {item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button onClick={clearCart} className="clear-btn">
            🗑 Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
