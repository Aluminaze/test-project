import React from "react";
import {
  getStartEditDocument,
  saveEditDocumentText,
} from "../../redux/documentViewerReducer";
import { connect } from "react-redux";
import Header from "./Header";

const HeaderContainer = (props) => {
  const startEditDocument = (currentOpenDocumentText) => {
    if (props.documentIsOpen[0].name !== null) {
      props.getStartEditDocument(currentOpenDocumentText);
    }
  };

  return (
    <Header
      startEditDocument={startEditDocument}
      saveEditDocumentText={props.saveEditDocumentText}
      documentEditMode={props.documentEditMode}
      selectedDataId={props.selectedDataId}
      documentIsOpen={props.documentIsOpen}
    />
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
})(HeaderContainer);
