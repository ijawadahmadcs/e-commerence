"use client";
import { useState } from "react";
import { CartProvider, useCart } from "@/app/cartContext/cartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const router = useRouter();

  const handlePayment = () => {
    if (!cardNumber || !expiry || !cvv) {
      alert("Please fill all card details!");
      return;
    }

    clearCart();
    router.push("/ordersucces");
  };

  return (
    <div className="w-screen h-screen flex justify-center mt-8">
      <div className="p-8 m-18 max-w-lg mx-auto bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-pink-500">Checkout</h1>

        <p className="mb-2">
          Total Amount: <strong>${getCartTotal().toFixed(2)}</strong>
        </p>

        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <input
          type="text"
          placeholder="Expiry (MM/YY)"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <input
          type="password"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          className="border p-2 w-full mb-4 border-gray-700"
        />

        <button
          onClick={handlePayment}
          className="bg-pink-500 text-white p-2 rounded w-full hover:bg-pink-600"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
