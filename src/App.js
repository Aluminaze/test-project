import React from "react";
import style from "./App.module.css";
import Header from "./components/Header/Header";
import SourceTree from "./components/SourceTree/SourceTree";
import DocumentViewer from "./components/DocumentViewer/DocumentViewer";

const App = (props) => {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.wrapper}>
        <SourceTree />
        <DocumentViewer />        
      </div>
    </div>
  );
};

export default App;
