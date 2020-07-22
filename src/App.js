import React from "react";
import style from "./App.module.css";
import Header from "./components/Header/Header";
import SourceTree from "./components/SourceTree/SourceTree";

const sourceTreeData = {
  dialogsData: {
    id: "root",
    name: "Переписка",
    children: [
      {
        id: "1",
        name: "Партнеры",
        children: [
          {
            id: "1_1",
            name: "Письмо 1",
          },
          {
            id: "1_2",
            name: "Письмо 2",
          },
          {
            id: "1_3",
            name: "Письмо 3",
          },
        ]
      },
      {
        id: "2",
        name: "ФНС",
        children: [
          {
            id: "2_1",
            name: "Извещение 1",
          },
          {
            id: "2_2",
            name: "Извещение 2",
          },
          {
            id: "2_3",
            name: "Извещение 3",
          },
        ],
      },
    ],
  },
  documentsData: {
    id: "root",
    name: "Документы",
    children: [
      {
        id: "1",
        name: "Договора",
        children: [
          {
            id: "1_1",
            name: "Договор 1",
          },
          {
            id: "1_2",
            name: "Договор 2",
          },
          {
            id: "1_3",
            name: "Договор 3",
          },
        ]
      },
      {
        id: "2",
        name: "Декларации",
        children: [
          {
            id: "2_1",
            name: "Декларация 1",
          },
          {
            id: "2_2",
            name: "Декларация 2",
          },
          {
            id: "2_3",
            name: "Декларация 3",
          },
        ],
      },
    ],
  }
}


const App = (props) => {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.wrapper}>
        <div className={style.documents__sourceTree}>
          <SourceTree sourceTreeData={sourceTreeData}/>
        </div>
        <div className={style.documents__viewer}>
          <div className={style.documents__text}>Documents text</div>
          <div className={(style.documents__infoBar, style.infoBar)}>
            <div className={style.infoBar__openFileName}>Name of document</div>
            <div className={style.infoBar__currentDate}>01/01/2020</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
