import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  // 🟢 Fetch products from API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(true);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // 🟢 Add item to cart
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // 🔴 Remove item
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // 🗑 Clear cart
  const clearCart = () => setCart([]);

  const contextValue = {
    products,
    cart,
    isLoading,
    isError,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}
