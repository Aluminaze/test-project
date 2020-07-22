import React from "react";
import DocumentsTree from "./DocumentsTree";
import DialogsTree from "./DialogsTree";
import { connect } from "react-redux";
import { setSelectedDataId } from "../../redux/sourceTreeReducer";

const SourceTree = (props) => {
  return (
    <div>
      <DocumentsTree
        documentsData={props.sourceTreeData.documentsData}
        setSelectedDataId={props.setSelectedDataId}
      />
      <DialogsTree
        dialogsData={props.sourceTreeData.dialogsData}
        setSelectedDataId={props.setSelectedDataId}
      />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    sourceTreeData: state.sourceTree.sourceTreeData,
    selectedDataId: state.sourceTree.selectedDataId,
  };
};

export default connect(mapStateToProps, { setSelectedDataId })(SourceTree);
