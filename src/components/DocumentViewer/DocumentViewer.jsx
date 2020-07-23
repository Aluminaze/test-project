import React from "react";
import style from "./DocumentViewer.module.css";
import { connect } from "react-redux";
import InfoBar from "./InfoBar/InfoBar";
import DocumentReadMode from "./DocumentReadMode/DocumentReadMode";
import DocumentEditMode from "./DocumentEditMode/DocumentEditMode";
import { onChangeEditDocumentText } from "../../redux/documentViewerReducer";

const DocumentViewer = (props) => {
  return (
    <div className={style.documents__viewer}>
      {props.documentEditMode ? (
        <DocumentEditMode
          onChangeEditDocumentText={props.onChangeEditDocumentText}
          documentIsOpen_textEdit={props.documentIsOpen_textEdit}
        />
      ) : (
        <DocumentReadMode documentIsOpen_text={props.documentIsOpen[0].text} />
      )}
      <InfoBar documentIsOpen_name={props.documentIsOpen[0].name} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    documentIsOpen: state.documentViewer.documentIsOpen,
    documentEditMode: state.documentViewer.documentEditMode,
    documentIsOpen_textEdit: state.documentViewer.documentIsOpen_textEdit,
  };
};

export default connect(mapStateToProps, { onChangeEditDocumentText })(
  DocumentViewer
);
