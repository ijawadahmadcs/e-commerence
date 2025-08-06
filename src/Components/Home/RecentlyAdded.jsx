import Container from "../Container/Container";
import Product from "../Product/Product";

export default async function RecentlyAdded(){
    const res = await fetch("https://fakestoreapi.in/api/products?limit=6");
    const data = await res.json();
    console.log(data);
  return (
    <div className="bg-gray-100">
      <Container>
        <h1 className="text-center text-2xl font-bold text-gray-700">
          Recently Added Products
        </h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            data.products.map((prod)=>{
              return <Product key={prod.id} product={prod}/>
            })
          }
        </div>
      </Container>
    </div>
  );
};
