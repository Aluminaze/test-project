import React from "react";
import style from "./InfoBar.module.css";
import DescriptionIcon from "@material-ui/icons/Description";

const InfoBar = (props) => {
  const getCurrentDate = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div className={(style.documents__infoBar, style.infoBar)}>
      <div className={style.infoBar__openFileName}>
        <DescriptionIcon className={style.infoBar__documentIcon} fontSize="small" />
        {props.documentIsOpen_name !== null ? props.documentIsOpen_name : null}
      </div>
      <div className={style.infoBar__currentDate}>{getCurrentDate()}</div>
    </div>
  );
};

export default InfoBar;
