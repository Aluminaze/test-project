import React from "react";
import style from "./Header.module.css";
import SaveRoundedIcon from "@material-ui/icons/SaveRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import Header from "./Header";
import {
  getStartEditDocument,
  saveEditDocumentText,
} from "../../redux/documentViewerReducer";
import { connect } from "react-redux";

const HeaderContainer = (props) => {
  const startEditDocument = (currentOpenDocumentText) =>
    props.documentIsOpen[0].name !== null
      ? props.getStartEditDocument(currentOpenDocumentText)
      : null;

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
        style={{ fill: "white" }}
        fontSize="default"
      />
      <span>Редактировать</span>
    </button>
  );
  const editButton_deactive = (
    <button disabled className={style.header__editButton__disabled}>
      <EditRoundedIcon
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
        style={{ fill: "white" }}
        fontSize="default"
      />
      <span>Сохранить</span>
    </button>
  );
  const saveButton_deactive = (
    <button disabled className={style.header__saveButton__disabled}>
      <SaveRoundedIcon
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

  return <Header saveButton={saveButton} editButton={editButton} />;
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
})(HeaderContainer);
