import React from "react";
import style from "./DocumentEditMode.module.css";

const DocumentEditMode = (props) => {
  const editedText = React.createRef();
  const onChangeEditedText = () => {
    props.onChangeEditDocumentText(editedText.current.value);
  };

  return (
    <div className={style.documents__text}>
      <textarea
        className={style.documents__textarea}
        onChange={onChangeEditedText}
        ref={editedText}
        value={props.documentIsOpen_textEdit}
      />
    </div>
  );
};

export default DocumentEditMode;