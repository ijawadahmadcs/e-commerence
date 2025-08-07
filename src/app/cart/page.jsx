"use client"
import { useCart } from "@/CartContext/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="border p-2 my-2 flex justify-between">
            <span>{item.title}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
      
        ))
      )}
    </div>
  );
};

export default Cart;
