import React from "react";
import style from "./DocumentViewer.module.css";
import { connect } from "react-redux";

const DocumentViewer = (props) => {
  return (
    <div className={style.documents__viewer}>
          <div className={style.documents__text}> {props.documentIsOpen[0].text} </div>
          <div className={(style.documents__infoBar, style.infoBar)}>
            <div className={style.infoBar__openFileName}>Name of document</div>
            <div className={style.infoBar__currentDate}>01/01/2020</div>
          </div>
        </div>
  )
};

const mapStateToProps = (state) => {
  return {
    documentIsOpen: state.documentViewer.documentIsOpen
  }
}

export default connect(mapStateToProps)(DocumentViewer);
