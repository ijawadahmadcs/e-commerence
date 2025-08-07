import Container from "@/Components/Container/Container";
import Product from "@/Components/Product/Product";

const StorePage = () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <CategoryListing />
      <ProductListing />
    </Container>
  );
};

export default StorePage;

const CategoryListing = async () => {
  const response = await fetch("https://fakestoreapi.in/api/products/category");
  const data = await response.json();
  return (
    <div className="md:col-span-1">
      <p className="text-xl font-bold text-gray-700 p-2">Categories</p>
      <ul>
        {data.categories.map((cat, i) => (
          <li
            className="border-2 border-pink-500 p-2 my-2 font-bold"
            key={"category-" + i}
          >
            {cat.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProductListing = async () => {
  const response = await fetch("https://fakestoreapi.in/api/products");
  const data = await response.json();
  return (
    <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.products.map((prod) => (
        <Product product={prod} key={"product" + prod.id} />
      ))}
    </div>
  );
};
