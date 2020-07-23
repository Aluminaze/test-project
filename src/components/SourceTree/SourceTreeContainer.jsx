import React from "react";
import SourceTree from "./SourceTree";
import { connect } from "react-redux";
import { setSelectedDataId } from "../../redux/sourceTreeReducer";
import {
  getDocumentById,
  saveEditDocumentText,
} from "../../redux/documentViewerReducer";

const SourceTreeContainer = (props) => {
  return (
    <SourceTree
      dialogsData={props.sourceTreeData.dialogsData}
      documentsData={props.sourceTreeData.documentsData}
      setSelectedDataId={props.setSelectedDataId}
      getDocumentById={props.getDocumentById}
      documentEditMode={props.documentEditMode}
      saveEditDocumentText={props.saveEditDocumentText}
      selectedDataId={props.selectedDataId}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    sourceTreeData: state.sourceTree.sourceTreeData,
    selectedDataId: state.sourceTree.selectedDataId,
    documentEditMode: state.documentViewer.documentEditMode,
  };
};

export default connect(mapStateToProps, {
  setSelectedDataId,
  getDocumentById,
  saveEditDocumentText,
})(SourceTreeContainer);
