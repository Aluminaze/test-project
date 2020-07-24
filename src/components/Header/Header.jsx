import React from "react";
import style from "./Header.module.css";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";

const Header = (props) => {
  return (
    <section className={style.header}>
      <div className={style.header__leftSide}>
        <h1 className={style.header__title}>Тестовое задание</h1>
      </div>
      <div className={style.header__rightSide}>
        {props.saveButton}
        {props.editButton}
        <AccountBoxRoundedIcon
          className={style.header__accountIcon}
          style={{ fill: "white" }}
          fontSize="large"
        />
      </div>
    </section>
  );
};

export default Header;
