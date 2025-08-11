import Container from "@/Components/Container/Container";
import Image from "next/image";
import React from "react";

export default async function ProductPage({ params: { id } }) {
  const response = await fetch(`https://fakestoreapi.in/api/products/${id}`);
  const data = await response.json();
  const product = data.product;

  return (
    <Container className="py-10 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="w-full h-[400px] relative">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {product.title}
          </h1>
          <p className="text-gray-600 whitespace-pre-line mb-6">
            {product.description}
          </p>

          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <span className="font-semibold">Brand:</span> {product.brand}
            </p>
            <p>
              <span className="font-semibold">Model:</span> {product.model}
            </p>
            <p>
              <span className="font-semibold">Color:</span> {product.color}
            </p>
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {product.category}
            </p>
            <p>
              <span className="font-semibold">Discount:</span>{" "}
              {product.discount}%
            </p>
            <p className="text-pink-600 font-bold text-xl">
              Price: ${product.price}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
