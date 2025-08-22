"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CartProvider, useCart } from "@/cartContext/cartContext";
import { motion } from "framer-motion";


const Product = ({ product }) => {
 const { addToCart } = useCart();
  return (
    <motion.div
  className="bg-white p-4 rounded-lg shadow-lg transition duration-300 ease-in m-1"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.1 }}
>
    <div className="bg-white p-4 rounded-lg shadow-lg transition duration-300 ease-in m-1">
      <Link href={`/product/${product.id}`}>
        <Image
          width={300}
          height={150}
          src={product.image}
          alt={product.title}
          className={"w-full h-48 object-cover rounded-md"}
        />
      </Link>
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-800 min-h-[70px] leading-snug line-clamp-2">
          {product.title}
        </h3>

        <div className="mt-3 space-y-1 text-sm text-gray-700">
          <p>
            <span className="font-medium text-gray-900">Color:</span>{" "}
            {product.color}
          </p>
          <p>
            <span className="font-medium text-gray-900">Brand:</span>{" "}
            {product.brand}
          </p>
          <p>
            <span className="font-medium text-gray-900">Category:</span>{" "}
            {product.category}
          </p>
          <p>
            <span className="font-medium text-gray-900">Discount:</span>{" "}
            {product.discount}%
          </p>
        </div>

        <p className="mt-3 text-lg font-bold text-pink-600">${product.price}</p>
          <button onClick={() => addToCart(product)} className="bg-pink-500 text-white px-3 py-1 rounder-md hover:bg-pink-700 transition duration-300 mt-2 mr-4">Add-to-Cart
          </button>
         
      </div>
    </div>
    </motion.div>
  );
};

export default Product;
