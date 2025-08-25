"use client";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, selectCartItems, selectCartTotal, selectCartCount } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const itemCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  const router = useRouter();

  const Checkout = () => router.push("/checkout");

  return (
    <div className="flex justify-center py-10 min-h-screen ">
      <div className="bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 shadow-lg rounded-2xl w-full max-w-3xl p-6">
        <h1 className="text-2xl font-bold mb-6 text-pink-600 text-center">🛒 Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="border border-pink-200 rounded-xl p-4 flex justify-between items-center bg-pink-50/30 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-contain rounded-lg border border-gray-100" />
                    <div>
                      <p className="font-semibold text-gray-800 line-clamp-1">{item.title}</p>
                      <span className="inline-block mt-1 text-pink-600 font-bold bg-pink-100 px-2 py-0.5 rounded-full text-sm">${item.price}</span>
                    </div>
                  </div>
                  <button onClick={() => dispatch(removeFromCart(item.id))} className="px-3 py-1 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-pink-50 rounded-xl shadow-inner">
              <p className="font-semibold text-lg">Total Items: <span className="text-pink-600">{itemCount}</span></p>
              <p className="font-semibold text-lg">Total Price: <span className="text-pink-600">${total.toFixed(2)}</span></p>
              <button onClick={() => dispatch(clearCart())} className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 w-full">Clear Cart</button>
              <button onClick={Checkout} className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 w-full">Check Out</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
