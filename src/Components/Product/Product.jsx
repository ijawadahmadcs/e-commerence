import React from "react";
import Image from "next/image";
import Link from "next/link";
const Product = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg transition 0.3 ease m-1">
      <Link href={`/product/${product.id}`}>
        <Image
          width={300}
          height={150}
          src={product.image}
          alt={product.title}
          className={"w-full h-48 object-cover rounded-md transition 0.3s ease"}
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

        <button className="bg-pink-500 text-white px-3 py-1 rounder-md hover:bg-pink-700 transition duration-300 mt-2">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product;
