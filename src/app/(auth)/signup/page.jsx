import Link from "next/link";

const Signup = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          Sign-up
        </h2>
        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Enter Email
            </label>
            <input type="email" placeholder="Enter email"  className="w-full border-2 border-pink-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"/>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input type="password" placeholder="Enter password"
            className="w-full border-2 border-pink-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Confirm Password
            </label>
            <input  className="w-full border-2 border-pink-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400" type="text" placeholder="Confirm Password" />
          </div>

          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white p-3 font-semibold transition duration-300"
          >
            Sign-up
          </button>
          <p className="text-center text-gray-500 text-sm mt-4">
            already have an account?{" "}
            <Link href="/signup" className="text-pink-500 hover:underline">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
