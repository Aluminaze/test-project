import React from "react";
import style from "./App.module.css"
import Header from "./components/Header/Header";

const App = (props) => {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.wrapper}>
        <div className={style.documents__tree}>Source Tree</div>
        <div className={style.documents__viewer}>
          <div className={style.documents__text}>Documents text</div>
          <div className={style.documents__infoBar, style.infoBar}>
            <div className={style.infoBar__openFileName}>Name of document</div>
            <div className={style.infoBar__currentDate}>01/01/2020</div>
          </div>          
        </div>
      </div>
    </div>    
  )
}

export default App;
