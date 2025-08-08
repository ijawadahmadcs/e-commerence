"use client"
import { useCart } from "@/CartContext/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="p-4 w-screen h-screen">
      <h1 className="text-xl font-bold mb-4 p-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="border mx-8 my-2 flex justify-between">
            <span>{item.title}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-pink-500 font-bold"
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
