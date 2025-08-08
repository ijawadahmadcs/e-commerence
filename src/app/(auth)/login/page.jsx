"use client"
import Link from "next/link";
const Login = () => {
  
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          Welcome Back
        </h2>

        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-2 border-pink-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border-2 border-pink-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <Link href="/">
              <p className="pt-4 mr-2 text-pink-600">forgot password!</p>
            </Link>
          </div>

          <button
           
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded font-semibold transition duration-300"
          >
            Login
          </button>

          <p className="text-center text-gray-500 text-sm mt-4">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-pink-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
