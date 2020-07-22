import React from "react";
import DocumentsTree from "./DocumentsTree";
import DialogsTree from "./DialogsTree";
import { connect } from "react-redux";

const SourceTree = (props) => {
  return (
    <div>
      <DocumentsTree documentsData={props.sourceTreeData.documentsData} />
      <DialogsTree dialogsData={props.sourceTreeData.dialogsData} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    sourceTreeData: state.sourceTree.sourceTreeData
  }  
};

export default connect(mapStateToProps,)(SourceTree);
