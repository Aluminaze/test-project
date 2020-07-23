import React from "react";
import style from "./DocumentEditMode.module.css";

const DocumentEditMode = (props) => {
  return <div className={style.documents__text}>
    <input value={props.documentIsOpen_textEdit}/>
  </div>;
};

export default DocumentEditMode;
