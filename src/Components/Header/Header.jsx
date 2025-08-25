"use client";
import React, { useState } from "react";
import Container from "../Container/Container";
import Link from "next/link";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import Theme from "@/Components/Theme/theme";
import { useSelector } from "react-redux";
import { selectCartCount } from "@/redux/slices/cartSlice";
import { useRouter } from "next/navigation";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="py-3 px-2 shadow">
      <Container className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-pink-500 font-bold text-3xl md:text-4xl">
            Picksyy
          </span>
        </div>
        <div className="hidden md:flex flex-1 max-w-[500px] mx-5">
          <input
            type="text"
            placeholder="Search for products..."
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
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
  const cartCount = useSelector(selectCartCount);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center gap-4 relative">
      <ul className="hidden md:flex items-center gap-6 font-semibold">
        <li>
          <Link href="/firstpage" className="text-gray-700 hover:text-pink-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/product" className="text-gray-700 hover:text-pink-500">
            Products
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <Link href="/cart">
          <div className="relative">
            <FiShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </Link>
        <Theme />
        <SignedOut>
          <SignInButton>
            <button className="border-pink-500 border-2 text-sm px-3 h-9 rounded-full">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-pink-500 text-white text-sm px-3 h-9 rounded-full">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
    </nav>
  );
};
