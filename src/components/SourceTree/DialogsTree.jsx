import React from "react";
import TreeItem from "@material-ui/lab/TreeItem";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles({
  root: {
    eight: "auto",
    flexGrow: 1,
    maxWidth: "100vh",
  },
});

const DialogsTree = (props) => {
  const classes = useStyles();
  const onClickSourceTree = (dataId) => {
    props.setSelectedDataId(dataId);
    props.getDocumentById(dataId);
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
      {renderTree(props.dialogsData)}
    </TreeView>
  );
};

export default DialogsTree;