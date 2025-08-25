"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/store/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    const dummyEmail = "test@example.com";
    const dummyPassword = "123456";
    const fakeToken = "abcd1234";

    if (email === dummyEmail && password === dummyPassword) {
      // ✅ Save in Redux
      dispatch(loginSuccess(fakeToken));

      setMessage("Login successful!");
      setTimeout(() => {
        router.push("/adminPanel");
      }, 1000);
    } else {
      setMessage("Invalid email or password!");
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 flex-col">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          Admin Login
        </h2>
        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full border-2 border-pink-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-full border-2 border-pink-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
            />
            <Link href="/">
              <p className="pt-4 mr-2 text-pink-600">forgot password!</p>
            </Link>
          </div>

          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded font-semibold transition duration-300 w-full"
          >
            Login
          </button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
