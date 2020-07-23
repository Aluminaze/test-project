import React from "react";
import TreeItem from "@material-ui/lab/TreeItem";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const useStyles = makeStyles({
  root: {
    height: "auto",
    flexGrow: 1,
    maxWidth: "100vh",
  },
});

const DocumentsTree = (props) => {
  let confirmForSave = () => {
    confirmAlert({
      message: "Сохранить последние изменения в текущем документе?",
      buttons: [
        {
          label: "Да",
          onClick: () => props.saveEditDocumentText(props.selectedDataId),
        },
        {
          label: "Нет",
          onClick: () => props.getDocumentById(props.selectedDataId),
        },
      ],
    });
  };

  const classes = useStyles();
  const onClickSourceTree = (dataId) => {
    if (props.documentEditMode) {
      confirmForSave();
    } else {
      props.setSelectedDataId(dataId);
      props.getDocumentById(dataId);
    }
  };

  const renderTree = (nodes) => (
    <TreeItem
      onClick={() =>
        nodes.type === "document" ? onClickSourceTree(nodes.id) : null
      }
      key={nodes.id}
      nodeId={nodes.id}
      label={nodes.name}
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={["root"]}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(props.documentsData)}
    </TreeView>
  );
};

export default DocumentsTree;
