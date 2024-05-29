import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, SetAmountIsValid] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmoun = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmoun;
    console.log(enteredAmoun);
    if (
      enteredAmoun.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      SetAmountIsValid(true);
      console.log("gg", enteredAmoun);
      return;
    }
    console.log("ggj", enteredAmoun);
    props.onAddCart(enteredAmountNumber);
  };

  return (
    <form className={classes.mealform} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {amountIsValid && <p>Please Enter Between 1 to 5</p>}
    </form>
  );
};
export default MealItemForm;
