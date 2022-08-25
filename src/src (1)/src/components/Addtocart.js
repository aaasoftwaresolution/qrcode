import { CartProvider, useCart } from "react-use-cart";
import Example from "./Example";

export default function Page() {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      name: "sandeep",
      price: 350,
      quantity: 1
    },
    {
      id: 2,
      name: "Noodles",
      price: 199,
      quantity: 5
    },
    {
      id: 3,
      name: "Alfam",
      price: 100,
      quantity: 1
    },
  ];

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <Example p={p}/>
        </div>
      ))}
    </div>
  );
}

 


