import React from "react";
import style from "./App.module.css";
import Header from "./components/Header/Header";
import DocumentViewer from "./components/DocumentViewer/DocumentViewer";
import SourceTreeContainer from "./components/SourceTree/SourceTreeContainer";

const App = (props) => {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.wrapper}>
        <SourceTreeContainer />
        <DocumentViewer />        
      </div>
    </div>
  );
};

export default App;
