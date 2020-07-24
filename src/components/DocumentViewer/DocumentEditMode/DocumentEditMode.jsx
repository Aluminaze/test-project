import React from "react";
import style from "./DocumentEditMode.module.css";

const DocumentEditMode = (props) => {
  const editedText = React.createRef();
  const onChangeEditedText = () => {
    props.onChangeEditDocumentText(editedText.current.value);
  };

  return (
    <textarea
      className={style.documents__textarea}
      ref={editedText}
      autofocus={true}
      onChange={onChangeEditedText}
      value={props.documentIsOpen_textEdit}
    />
  );
};

export default DocumentEditMode;
