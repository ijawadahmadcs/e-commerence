"use client";
import React, { createContext, useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    toast.custom(
      (t) => (
        <div
          className={`flex items-center gap-3 p-3 bg-white rounded-lg shadow-lg border border-gray-200 
        ${t.visible ? "animate-slideIn" : "animate-slideOut"}`}
          style={{ width: "250px" }}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-12 h-12 object-contain rounded"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold">{product.title}</p>
            <p className="text-xs text-gray-500">${product.price}</p>
          </div>
        </div>
      ),
      {
        duration: 2000,
      }
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  const getItemCount = () => {
    return cartItems.reduce((count, item) => count + (item.quantity || 1), 0);
  };

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const updateQuantity = (productId, newQty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getItemCount,
        isInCart,
        updateQuantity,
      }}
    >
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </CartContext.Provider>
  );
};

// Hook to use cart
export const useCart = () => useContext(CartContext);
