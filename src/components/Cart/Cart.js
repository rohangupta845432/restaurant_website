const Cart = (props) => {
  return (
    <div>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>40.20</span>
      </div>
      <div>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};
