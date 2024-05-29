import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealsItem.module.css";
import CartContext from "../../../store/cart-contaxt";

const MealsItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addtoCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <div className={classes.mealform}>
        <MealItemForm onAddCart={addtoCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
