import React from "react";
import DocumentsTree from "./DocumentsTree";
import DialogsTree from "./DialogsTree";

const SourceTree = (props) => {
  return (
    <div> 
      <DocumentsTree  documentsData={props.sourceTreeData.documentsData}/>
      <DialogsTree dialogsData={props.sourceTreeData.dialogsData}/>
    </div>
  );
};

export default SourceTree;
