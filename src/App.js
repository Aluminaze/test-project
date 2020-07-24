import React from "react";
import style from "./App.module.css";
import DocumentViewer from "./components/DocumentViewer/DocumentViewer";
import SourceTreeContainer from "./components/SourceTree/SourceTreeContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <div className={style.container}>
      <HeaderContainer />
      <div className={style.wrapper}>
        <SourceTreeContainer />
        <DocumentViewer />        
      </div>
    </div>
  );
};

export default App;
