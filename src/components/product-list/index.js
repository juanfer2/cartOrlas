import React, { useState } from "react";
import "./index.css";
import ItemCard from "./itemCard";

function ProductList({ products, addToCard }) {
  return (
    <div className="layout-row wrap justify-content-center flex-70 app-product-list">
      {products.map((product, i) => {
        return <ItemCard product={ product } key={ i } addToCard={ addToCard } />;
      })}
    </div>
  );
}

export const UpdateMode = {
  ADD: 1,
  SUBTRACT: 0,
};

export default ProductList;
