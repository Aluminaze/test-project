import React from "react";
import style from "./SourceTree.module.css";
import DocumentsTree from "./DocumentsTree";
import DialogsTree from "./DialogsTree";
import { connect } from "react-redux";
import { setSelectedDataId } from "../../redux/sourceTreeReducer";
import { getDocumentById } from "../../redux/documentViewerReducer";

const SourceTree = (props) => {
  return (
    <div className={style.documents__sourceTree}>
      <DocumentsTree
        documentsData={props.sourceTreeData.documentsData}
        setSelectedDataId={props.setSelectedDataId}
        getDocumentById={props.getDocumentById}
        documentEditMode={props.documentEditMode}
      />
      <DialogsTree
        dialogsData={props.sourceTreeData.dialogsData}
        setSelectedDataId={props.setSelectedDataId}
        getDocumentById={props.getDocumentById}
        documentEditMode={props.documentEditMode}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sourceTreeData: state.sourceTree.sourceTreeData,
    selectedDataId: state.sourceTree.selectedDataId,
    documentEditMode: state.documentViewer.documentEditMode,
  };
};

export default connect(mapStateToProps, { setSelectedDataId, getDocumentById })(SourceTree);
