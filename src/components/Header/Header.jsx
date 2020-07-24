import React from "react";
import style from "./Header.module.css";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import SaveRoundedIcon from "@material-ui/icons/SaveRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
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

  let editButton;
  const editButton_active = (
    <button
      className={style.header__editButton}
      onClick={(event) => {
        event.preventDefault();
        startEditDocument(props.documentIsOpen[0].text);
      }}
    >
      <EditRoundedIcon
        className={style.header__openIcon}
        style={{ fill: "white" }}
        fontSize="default"
      />
      <span>Редактировать</span>
    </button>
  );
  const editButton_deactive = (
    <button disabled className={style.header__editButton__disabled}>
      <EditRoundedIcon
        className={style.header__openIcon}
        style={{ fill: "#a6a6a6" }}
        fontSize="default"
      />
      <span>Редактировать</span>
    </button>
  );
  let saveButton;
  const saveButton_active = (
    <button
      className={style.header__saveButton}
      onClick={() =>
        props.documentEditMode
          ? props.saveEditDocumentText(props.selectedDataId)
          : null
      }
    >
      <SaveRoundedIcon
        className={style.header__saveIcon}
        style={{ fill: "white" }}
        fontSize="default"
      />
      <span>Сохранить</span>
    </button>
  );
  const saveButton_deactive = (
    <button disabled className={style.header__saveButton__disabled}>
      <SaveRoundedIcon
        className={style.header__saveIcon}
        style={{ fill: "#a6a6a6" }}
        fontSize="default"
      />
      <span>Сохранить</span>
    </button>
  );

  if (props.documentEditMode) {
    saveButton = saveButton_active;
    editButton = editButton_deactive;
  } else {
    saveButton = saveButton_deactive;
    if (props.selectedDataId !== null) {
      editButton = editButton_active;
    } else {
      editButton = editButton_deactive;
    }
  }

  return (
    <section className={style.header}>
      <div className={style.header__leftSide}>
        <h1 className={style.header__title}>Тестовое задание</h1>
      </div>
      <div className={style.header__rightSide}>
        {saveButton}
        {editButton}
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
    documentEditMode: state.documentViewer.documentEditMode,
  };
};

export default connect(mapStateToProps, {
  getStartEditDocument,
  saveEditDocumentText,
})(Header);
