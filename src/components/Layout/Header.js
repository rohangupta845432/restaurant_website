import React, { Fragment } from "react";
import mealsImages from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImages} />
      </div>
    </Fragment>
  );
};
export default Header;
