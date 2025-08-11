import React from "react";
import Container from "../Container/Container";
import Link from "next/link";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import Theme from "@/Components/Theme/theme";
const Header = () => {
  return (
    <header className={`py-3 px-1 shadow `}>
      <Container className="flex justify-between items-center flex-col md:flex-row gap-4">
        {/* <link href="/"> */}
        <div className="flex items-center w-full md:w-auto justify-center md:justify-start">
          <span className="text-pink-500 font-bold text-4xl">
            Click<span className="text-2xl"> & </span>Pick
          </span>
        </div>
        {/* </link> */}

        <div className={`flex-1 max-w-[500px] ml-5 flex items-center mt-4 `}>
          <input
            type="text"
            placeholder="Search for products..."
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500 w-full "
          />
          <button className="bg-pink-500 text-white px-4 py-3 rounded-r-md hover:bg-pink-600">
            <FiSearch size={18} />
          </button>
        </div>
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;

const Navbar = () => {
  return (
    <nav className="flex items-center gap-5 md:gap-6 mt-5 md:justify-between">
      <ul className="flex items-center gap-5 font-semibold">
        <li className="text-gray-700 hover:text-pink-500 transition-colors duration-300">
          <Link href="/firstpage">Home</Link>
        </li>
        <li className="text-gray-700 hover:text-pink-500 transition-colors duration-300">
          <Link href="/product">Products</Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <Link href="/cart">
          <div className="relative">
            <FiShoppingCart size={24} />
            <span
              className={`absolute top-[-10px] right-[-10px] bg-pink-500 text-white text-xs font-bold rounded-full w-3 h-3 flex items-center justify-center`}
            ></span>
          </div>
        </Link>
        <Theme />
      </div>
    </nav>
  );
};
