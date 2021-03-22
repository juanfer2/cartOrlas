import React, { useState } from "react";

function ItemCard({ product, key }) {
  const [quantity, setQuantity] = useState(0);

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <section
      className="w-30"
      data-testid={"product-item-" + key}
      key={product.id}
    >
      <div className="card ma-16">
        <img
          alt="Your Cart"
          src={product.image}
          className="d-inline-block align-top product-image"
        />
        <div className="card-text pa-4">
          <h5 className="ma-0 text-center">{product.name}</h5>
          <p className="ma-0 mt-8 text-center">${product.price}</p>
        </div>
        <div className="card-actions justify-content-center pa-4">
          <button className="x-small outlined" data-testid="btn-item-add">
            Add To Cart
          </button>

          <div className="layout-row justify-content-between align-items-center">
            <button
              className="x-small icon-only outlined"
              data-testid="btn-quantity-subtract"
            >
              <i className="material-icons">remove</i>
            </button>

            <input
              type="number"
              disabled
              value={quantity}
              className="cart-quantity"
              data-testid="cart-quantity"
            />

            <button
              className="x-small icon-only outlined"
              data-testid="btn-quantity-add"
              onClick={() => addQuantity()}
            >
              <i className="material-icons">add</i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemCard;
