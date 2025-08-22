"use client";
import React, { useState } from "react";
import Container from "../Container/Container";
import Link from "next/link";
import {
  FiSearch,
  FiShoppingCart,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";
import Theme from "@/Components/Theme/theme";
import { useCart } from "@/app/cartContext/cartContext";
import { useRouter } from "next/navigation";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useAtom } from "jotai";
import { authTokenAtom } from "@/jotai/atom";

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
  const [, setToken] = useAtom(authTokenAtom);
  const router = useRouter();
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    setToken(null);
    router.push("/login");
  };

  return (
    <nav className="flex items-center gap-4 relative">
      <ul className="hidden md:flex items-center gap-6 font-semibold">
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
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </div>
        </Link>
        <Theme />
        <SignedOut>
          <SignInButton>
            <button className="border-pink-500 border-2 text-ceramic-white rounded-full font-medium text-sm px-3 h-9 hover:border-pink-300 hidden md:inline">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-pink-500 text-ceramic-white rounded-full font-medium text-sm px-3 h-9 hover:bg-pink-600 hidden md:inline">
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
      {menuOpen && (
        <div className="absolute top-14 right-0 w-48 bg-white shadow-lg rounded-lg py-4 px-5 flex flex-col gap-4 md:hidden z-50">
          <Link
            href="/firstpage"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-pink-500"
          >
            Home
          </Link>
          <Link
            href="/product"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-pink-500"
          >
            Products
          </Link>
          <SignedOut>
            <SignInButton>
              <button className="border-pink-500 border-2 rounded-md py-1 text-sm">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="bg-pink-500 text-white rounded-md py-1 text-sm">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
        </div>
      )}
    </nav>
  );
};
