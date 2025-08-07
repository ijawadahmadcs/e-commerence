import React from "react";
import Container from "../Container/Container";
import Product from "../Product/Product";

export default async function Featured() {
  const response = await fetch("https://fakestoreapi.in/api/products?limit=8");
  const data = await response.json();
  return (
    <Container className="p-6 min-h-screen">
  <h1 className="text-pink-500  text-center text-2xl font-bold mb-6">
    Featured Products
  </h1>

  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {
      data.products.map((prod) => (
        <Product key={prod.id} product={prod} />
      ))
    }
  </div>
</Container>

  );
}
