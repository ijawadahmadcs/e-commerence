import React from "react";
import Container from "../Container/Container";
import Link from "next/link";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import styles from "../../styles/header.module.css";
const Header = () => {
  return (
    <header className={`py-3 px-1 shadow`}>
      <Container className="flex justify-between items-center">
        {/* <link href="/"> */}
        <div className="flex items-center">
          <span className="text-pink-500 font-bold text-4xl">
            E-Store<b className="text-black">.</b>
          </span>
        </div>
        {/* </link> */}

        <div className={`${styles.searchBar} flex items-center`}>
          <input
            type="text"
            placeholder="Search for products..."
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="bg-pink-500 text-white px-4 py-3 rounded-r-md hover:bg-pink-600">
            <FiSearch size={18} />
          </button>
        </div>
        <Navbar/>
      </Container>
    </header>
  );
};

export default Header;

const Navbar = () => {
  return (
    <nav className="flex items-center pag-5">
      <ul className="flex items-center gap-3 font-semibold">
        <li className="text-gray-700 hover:pink-500 transition-colors duration-300">
          <Link href="/">Home</Link>
        </li>
        <li className="text-gray-700 hover:pink-500 transition-colors duration-300">
          <Link href="/store">Store</Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <Link href="/cart">
          <div className="relative">
            <FiShoppingCart size={24} />
            <span className={`${styles.cartBadge} absolute top-[-15px] right-[-20px] bg-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center`}>
              3
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
