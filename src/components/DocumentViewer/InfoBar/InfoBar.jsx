import React from "react";
import style from "./InfoBar.module.css";
import DescriptionIcon from "@material-ui/icons/Description";

const InfoBar = (props) => {
  return (
    <div className={(style.documents__infoBar, style.infoBar)}>
      <div className={style.infoBar__openFileName}>
        <DescriptionIcon fontSize="small" />
        {props.documentIsOpen_name !== null ?  props.documentIsOpen_name : null}
      </div>
      <div className={style.infoBar__currentDate}>01/01/2020</div>
    </div>
  );
};

export default InfoBar;
