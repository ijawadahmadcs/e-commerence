import Container from "@/Components/Container/Container";
import React from "react";

const StorePage = () => {
  return (
    <Container className="grid grid-cols-5">
      <CategoryListing />
      <ProductListing />
    </Container>
  );
};

export default StorePage;

const CategoryListing = async () => {
  const response = await fetch("https://fakestoreapi.in/api/products/category");
  const data = await  response.json();
  console.log(data.categories);
  return (
    <div className="">
      <p className="text-3xl font-bold text-gray-700 p-2">Categories</p>
      <ul className="">
        {data.categories.map((d, i) => (
          <li className="border-2 border-pink-500 p-2 my-2" key={"category-" + i}>{d.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  );
};
const ProductListing = async () => {
  const response = await fetch('https://fakestoreapi.in/api/products');
    const data = await response.json();
  return <div className="col-span-4">

  </div>;
};
