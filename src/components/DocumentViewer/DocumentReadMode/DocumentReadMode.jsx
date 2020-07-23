import React from "react";
import style from "./DocumentReadMode.module.css";

const DocumentReadMode = (props) => {
  return (
    <div className={style.documents__text}>{props.documentIsOpen_text}</div>
  );
};

export default DocumentReadMode;
