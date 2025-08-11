import Container from "@/Components/Container/Container";
import Product from "@/Components/Product/Product";
export default async function Type({ params: { type } }) {
  const response = await fetch(
    `https://fakestoreapi.in/api/products/category?type=${type}`
  );
  const data = await response.json();
  return (
     <Container className="p-6 min-h-screen">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((prod) => (
          <Product key={prod.id} product={prod} />
        ))}
      </div>
    </Container>
  );
}
