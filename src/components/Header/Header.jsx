import React from "react";
import style from "./Header.module.css";
import AccountTreeRoundedIcon from "@material-ui/icons/AccountTreeRounded";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import SaveRoundedIcon from "@material-ui/icons/SaveRounded";
import { getDocumentById } from "../../redux/documentViewerReducer";
import { connect } from "react-redux";

const Header = (props) => {

  const openDocument = (documentId) => {
    props.getDocumentById(documentId);
  }

  return (
    <section className={style.header}>
      <div className={style.header__leftSide}>
        <AccountTreeRoundedIcon
          className={style.header__treeIcon}
          style={{ fill: "white" }}
          fontSize="large"
        />
        <h1 className={style.header__title}>Тестовое задание</h1>
      </div>

      <div className={style.header__rightSide}>
        <SaveRoundedIcon
          className={style.header__saveIcon}
          style={{ fill: "white" }}
          fontSize="large"
        />
        <AddBoxRoundedIcon
          className={style.header__openIcon}
          style={{ fill: "white" }}
          fontSize="large"

          onClick={ () => openDocument(props.selectedDataId)}
        />
        <AccountBoxRoundedIcon
          className={style.header__accountIcon}
          style={{ fill: "white" }}
          fontSize="large"
        />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedDataId: state.sourceTree.selectedDataId
  };
};

export default connect(mapStateToProps, { getDocumentById })(Header);
