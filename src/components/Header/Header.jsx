import React from "react";
import style from "./Header.module.css";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import SaveRoundedIcon from "@material-ui/icons/SaveRounded";
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import {
  getStartEditDocument,
  saveEditDocumentText,
} from "../../redux/documentViewerReducer";
import { connect } from "react-redux";

const Header = (props) => {
  const startEditDocument = (currentOpenDocumentText) => {
    if (props.documentIsOpen[0].name !== null) {
      props.getStartEditDocument(currentOpenDocumentText);
    }
  };

  return (
    <section className={style.header}>
      <div className={style.header__leftSide}>
        <h1 className={style.header__title}>Тестовое задание</h1>
      </div>

      <div className={style.header__rightSide}>
        <SaveRoundedIcon
          onClick={() => props.saveEditDocumentText(props.selectedDataId)}
          className={style.header__saveIcon}
          style={{ fill: "white" }}
          fontSize="large"
        />
        
        <EditRoundedIcon
          className={style.header__openIcon}
          style={{ fill: "white" }}
          fontSize="large"
          onClick={() => startEditDocument(props.documentIsOpen[0].text)}
        />
        <AccountBoxRoundedIcon
          className={style.header__accountIcon}
          style={{ fill: "white" }}
          fontSize="large"
        />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedDataId: state.sourceTree.selectedDataId,
    documentIsOpen: state.documentViewer.documentIsOpen,
  };
};

export default connect(mapStateToProps, { getStartEditDocument, saveEditDocumentText })(Header);
