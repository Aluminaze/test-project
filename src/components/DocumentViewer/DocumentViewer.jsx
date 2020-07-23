import React from "react";
import style from "./DocumentViewer.module.css";
import { connect } from "react-redux";
import InfoBar from "./InfoBar/InfoBar";

const DocumentViewer = (props) => {
  return (
    <div className={style.documents__viewer}>
      <div className={style.documents__text}>
        {" "}
        {props.documentIsOpen[0].text}{" "}
      </div>
     <InfoBar documentIsOpen_name={props.documentIsOpen[0].name}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    documentIsOpen: state.documentViewer.documentIsOpen,
  };
};

export default connect(mapStateToProps)(DocumentViewer);
