import React, { createContext, useEffect, useState } from "react";
export const CartContext = createContext();
export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedItems = localStorage.getItem("cartItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [favoriteItems, setFav] = useState(() => {
    try {
      const saved = localStorage.getItem("favItems");
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      return [];
    }
  });

  // Play Sound +
  const playSound = () => {
    const audio = new Audio(
      "/ksjsbwuil-apple-pay-success-sound-effect-481188.mp3",
    );
    audio.play();
  };
  // increaseQuantity +
  function increaseQuantity(id) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item,
      ),
    );
  }
  // increaseQuantity -
  function increaseQuantityMin(id) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && (item.quantity || 1) > 1
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item,
      ),
    );
  }
  // add cart
  function addCart(item) {
    setCartItems((prev) => {
      const exists = prev.find((p) => p.id === item.id);

      if (exists) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p,
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
    playSound();
  }
  // add Favorite
  function toggleFavorite(item) {
    setFav((prev) => {
      const exists = prev.find((p) => p.id === item.id);

      if (exists) {
        return prev.filter((p) => p.id !== item.id);
      }

      return [...prev, item];
    });
  }
  // add local storage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("favItems", JSON.stringify(favoriteItems));
  }, [cartItems, favoriteItems]);
  // delete
  function Delete(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }
  function DeleteF(id) {
    setFav((prev) => prev.filter((item) => item.id !== id));
  }
  function DeleteAll() {
    setCartItems([]);
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCart,
        increaseQuantity,
        increaseQuantityMin,
        Delete,
        DeleteAll,
        favoriteItems,
        toggleFavorite,
        DeleteF,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
