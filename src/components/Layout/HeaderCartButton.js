import CartIcon from "../Cart/CartIcon.js";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";

import CartContext from "../../store/cart-contaxt.js";

const HeaderCartButton = ({ onButtonClick }) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button
      className={classes.button}
      onClick={() => {
        onButtonClick();
      }}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
