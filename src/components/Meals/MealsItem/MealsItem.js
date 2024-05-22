import MealItemForm from "./MealItemForm";
import classes from "./MealsItem.module.css";
const MealsItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <div className={classes.mealform}>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealsItem;
