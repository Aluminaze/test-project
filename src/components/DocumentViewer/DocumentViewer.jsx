import React from "react";
import style from "./DocumentViewer.module.css";
import { connect } from "react-redux";
import InfoBar from "./InfoBar/InfoBar";
import DocumentReadMode from "./DocumentReadMode/DocumentReadMode";
import DocumentEditMode from "./DocumentEditMode/DocumentEditMode";
import { onChangeEditDocumentText } from "../../redux/documentViewerReducer";

const DocumentViewer = (props) => {
  let documentViewer;

  if (props.documentEditMode) {
    documentViewer = (
      <DocumentEditMode
        onChangeEditDocumentText={props.onChangeEditDocumentText}
        documentIsOpen_textEdit={props.documentIsOpen_textEdit}
      />
    );
  } else {
    if (props.selectedDataId !== null)
      documentViewer = (
        <DocumentReadMode documentIsOpen_text={props.documentIsOpen[0].text} />
      );
    else
      documentViewer = (
        <div className={style.documents__text}>
          Для начала работы выберите документ или пиcьмо
        </div>
      );
  }

  return (
    <div className={style.documents__viewer}>
      {documentViewer}
      <InfoBar documentIsOpen_name={props.documentIsOpen[0].name} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    documentIsOpen: state.documentViewer.documentIsOpen,
    documentEditMode: state.documentViewer.documentEditMode,
    documentIsOpen_textEdit: state.documentViewer.documentIsOpen_textEdit,
    selectedDataId: state.sourceTree.selectedDataId,
  };
};

export default connect(mapStateToProps, { onChangeEditDocumentText })(
  DocumentViewer
);
