import { createContext, useContext, useState, useEffect } from "react";
const CartContext = createContext();
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(()=> {
    try{
      const saved = localStorage.getItem("Sajiya-cart");
      return saved ? JSON.parse(saved) : [];
    } catch{
      [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  useEffect(()=>{
    try{
      localStorage.setItem("Sajiya-cart", JSON.stringify(cartItems));
    } catch{}
  }, [cartItems]);
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (i) => i.id === item.id && i.size === item.size,
      );
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.size === item.size
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i,
        );
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
    setIsCartOpen(true);
  };
  const removeFromCart = (id, size) => {
    setCartItems((prev) =>
      prev.filter((i) => !(i.id === id && i.size === size)),
    );
  };
  const updateQuantity = (id, size, quantity) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === id && i.size === size ? { ...i, quantity } : i,
      ),
    );
  };
  const clearCart = () => setCartItems([]);
  const itemCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const subTotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        itemCount,
        subTotal,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
