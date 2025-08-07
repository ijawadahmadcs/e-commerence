import Container from "../Container/Container";
import Product from "../Product/Product";

export default async function RecentlyAdded(){
    const res = await fetch("https://fakestoreapi.in/api/products?limit=12");
    const data = await res.json();
  return (
    <div className="">
      <Container>
        <h1 className="text-pink-500 text-center text-2xl font-bold p-6">
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
