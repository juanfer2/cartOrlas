import React, { useState } from "react";
import "./App.css";
import "h8k-components";
import ProductList from "./components/product-list";
import Cart from "./components/cart";

const title = "HackerShop";

function App() {
  const products = [...PRODUCTS].map((product, index) => {
    product.id = index + 1;
    product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
    product.cartQuantity = 0;
    return product;
  });

  const [cart, setCart] = useState({items:[]});

  const addToCard = (item, quantity) =>{
    const newCart = cart.items
    
    setCart({...cart, items: [...newCart, { id: item.id, item: item.name, quantity } ] });
    
  }

  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row shop-component">
        <ProductList products={products} addToCard={addToCard} />
        <Cart cart={cart} />
      </div>
    </div>
  );
}

export const PRODUCTS = [
  {
    name: "Cap",
    price: 5,
  },
  {
    name: "HandBag",
    price: 30,
  },
  {
    name: "Shirt",
    price: 35,
  },
  {
    name: "Shoe",
    price: 50,
  },
  {
    name: "Pant",
    price: 35,
  },
  {
    name: "Slipper",
    price: 25,
  },
];
export default App;
