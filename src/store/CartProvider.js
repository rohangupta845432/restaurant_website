import React, { useReducer } from "react";

import CartContext from "./cart-contaxt";

const defaultCartState = {
  item: 0,
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  return defaultCartState;
};
const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
