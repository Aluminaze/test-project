(this["webpackJsonptest-project"]=this["webpackJsonptest-project"]||[]).push([[0],{11:function(e,t,n){e.exports={header:"Header_header__1BRpm",header__leftSide:"Header_header__leftSide__3r4kM",header__rightSide:"Header_header__rightSide__1lz52",header__treeIcon:"Header_header__treeIcon__2hh4_",header__title:"Header_header__title__1oX2c",header__saveIcon:"Header_header__saveIcon__2Hzs9",header__openIcon:"Header_header__openIcon__39iID",header__accountIcon:"Header_header__accountIcon__27ziU"}},23:function(e,t,n){e.exports={infoBar:"InfoBar_infoBar__dtlsc",infoBar__openFileName:"InfoBar_infoBar__openFileName__2RHGK",infoBar__currentDate:"InfoBar_infoBar__currentDate__18jkb"}},28:function(e,t,n){e.exports={container:"App_container__fH3sp",wrapper:"App_wrapper__Scdqe"}},30:function(e,t,n){e.exports={documents__viewer:"DocumentViewer_documents__viewer__1J1s5",documents__text:"DocumentViewer_documents__text__2xX8S"}},31:function(e,t,n){e.exports={documents__text:"DocumentEditMode_documents__text__1CAOo",documents__textarea:"DocumentEditMode_documents__textarea__1kTLA"}},42:function(e,t,n){e.exports={documents__text:"DocumentReadMode_documents__text__2-m6p"}},43:function(e,t,n){e.exports={documents__sourceTree:"SourceTree_documents__sourceTree__l4ZuF"}},48:function(e,t,n){e.exports=n(61)},53:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),d=n(8),o=n.n(d),r=(n(53),n(28)),u=n.n(r),_=n(11),i=n.n(_),m=n(40),l=n.n(m),s=n(38),E=n.n(s),D=n(39),I=n.n(D),p=n(45),f=n(4),x=function(e){return{type:"GET_SAVE_EDIT_DOCUMENT_TEXT",documentId:e}},T={documents:[{id:"1_1",name:"\u041f\u0438\u0441\u044c\u043c\u043e 1",text:"ID[1_1]: \u041f\u0438\u0441\u044c\u043c\u043e 1"},{id:"1_2",name:"\u041f\u0438\u0441\u044c\u043c\u043e 2",text:"ID[1_2]: \u041f\u0438\u0441\u044c\u043c\u043e 2"},{id:"1_3",name:"\u041f\u0438\u0441\u044c\u043c\u043e 3",text:"ID[1_3]: \u041f\u0438\u0441\u044c\u043c\u043e 3"},{id:"2_1",name:"\u0418\u0437\u0432\u0435\u0449\u0435\u043d\u0438\u0435 1",text:"ID[2_1]: \u0418\u0437\u0432\u0435\u0449\u0435\u043d\u0438\u0435 1"},{id:"2_2",name:"\u0418\u0437\u0432\u0435\u0449\u0435\u043d\u0438\u0435 2",text:"ID[2_2]: \u0418\u0437\u0432\u0435\u0449\u0435\u043d\u0438\u0435 2"},{id:"2_3",name:"\u0418\u0437\u0432\u0435\u0449\u0435\u043d\u0438\u0435 3",text:"ID[2_3]: \u0418\u0437\u0432\u0435\u0449\u0435\u043d\u0438\u0435 3"},{id:"3_1",name:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440 1",text:"ID[3_1]: \u0414\u043e\u0433\u043e\u0432\u043e\u0440 1"},{id:"3_2",name:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440 2",text:"ID[3_2]: \u0414\u043e\u0433\u043e\u0432\u043e\u0440 2"},{id:"3_3",name:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440 3",text:"ID[3_3]: \u0414\u043e\u0433\u043e\u0432\u043e\u0440 3"},{id:"4_1",name:"\u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f 1",text:"ID[4_1]: \u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f 1"},{id:"4_2",name:"\u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f 2",text:"ID[4_2]: \u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f 2"},{id:"4_3",name:"\u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f 3",text:"ID[4_3]: \u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f 3"}],documentIsOpen:[{id:null,name:null,text:null}],documentIsOpen_textEdit:"",documentEditMode:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DOCUMENT_BY_ID":return Object(f.a)(Object(f.a)({},e),{},{documentEditMode:!1,documentIsOpen:e.documents.filter((function(e){return e.id===t.documentId}))});case"GET_START_EDIT_DOCUMENT":return Object(f.a)(Object(f.a)({},e),{},{documentIsOpen_textEdit:t.currentOpenDocumentText,documentEditMode:!0});case"ON_CHANGE_EDIT_DOCUMENT_TEXT":return Object(f.a)(Object(f.a)({},e),{},{documentIsOpen_textEdit:t.editedDocumentText});case"GET_SAVE_EDIT_DOCUMENT_TEXT":return Object(f.a)(Object(f.a)({},e),{},{documents:[].concat(Object(p.a)(e.documents),[e.documentIsOpen[0].text=e.documentIsOpen_textEdit]),documentEditMode:!1});default:return e}},O=n(9),v=Object(O.b)((function(e){return{selectedDataId:e.sourceTree.selectedDataId,documentIsOpen:e.documentViewer.documentIsOpen,documentEditMode:e.documentViewer.documentEditMode}}),{getStartEditDocument:function(e){return{type:"GET_START_EDIT_DOCUMENT",currentOpenDocumentText:e}},saveEditDocumentText:x})((function(e){return c.a.createElement("section",{className:i.a.header},c.a.createElement("div",{className:i.a.header__leftSide},c.a.createElement("h1",{className:i.a.header__title},"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435")),c.a.createElement("div",{className:i.a.header__rightSide},c.a.createElement(E.a,{onClick:function(){return e.documentEditMode?e.saveEditDocumentText(e.selectedDataId):null},className:i.a.header__saveIcon,style:{fill:"white"},fontSize:"large"}),c.a.createElement(I.a,{className:i.a.header__openIcon,style:{fill:"white"},fontSize:"large",onClick:function(){return t=e.documentIsOpen[0].text,void(null!==e.documentIsOpen[0].name&&e.getStartEditDocument(t));var t}}),c.a.createElement(l.a,{className:i.a.header__accountIcon,style:{fill:"white"},fontSize:"large"})))})),y=n(30),g=n.n(y),N=n(23),w=n.n(N),b=n(41),M=n.n(b),S=function(e){return c.a.createElement("div",{className:(w.a.documents__infoBar,w.a.infoBar)},c.a.createElement("div",{className:w.a.infoBar__openFileName},c.a.createElement(M.a,{fontSize:"small"}),null!==e.documentIsOpen_name?e.documentIsOpen_name:null),c.a.createElement("div",{className:w.a.infoBar__currentDate},function(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,a=e.getFullYear();return"".concat(t,"/").concat(n,"/").concat(a)}()))},C=n(42),B=n.n(C),j=function(e){return c.a.createElement("div",{className:B.a.documents__text},e.documentIsOpen_text)},A=n(31),k=n.n(A),H=function(e){var t=c.a.createRef();return c.a.createElement("div",{className:k.a.documents__text},c.a.createElement("textarea",{className:k.a.documents__textarea,ref:t,autofocus:!0,onChange:function(){e.onChangeEditDocumentText(t.current.value)},value:e.documentIsOpen_textEdit}))},V=Object(O.b)((function(e){return{documentIsOpen:e.documentViewer.documentIsOpen,documentEditMode:e.documentViewer.documentEditMode,documentIsOpen_textEdit:e.documentViewer.documentIsOpen_textEdit,selectedDataId:e.sourceTree.selectedDataId}}),{onChangeEditDocumentText:function(e){return{type:"ON_CHANGE_EDIT_DOCUMENT_TEXT",editedDocumentText:e}}})((function(e){var t;return t=e.documentEditMode?c.a.createElement(H,{onChangeEditDocumentText:e.onChangeEditDocumentText,documentIsOpen_textEdit:e.documentIsOpen_textEdit}):null!==e.selectedDataId?c.a.createElement(j,{documentIsOpen_text:e.documentIsOpen[0].text}):c.a.createElement("div",{className:g.a.documents__text},"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0438\u043b\u0438 \u043f\u0438c\u044c\u043c\u043e"),c.a.createElement("div",{className:g.a.documents__viewer},t,c.a.createElement(S,{documentIsOpen_name:e.documentIsOpen[0].name}))})),G=n(43),U=n.n(G),z=n(83),R=n(81),X=n(82),F=n(32),J=n.n(F),L=n(33),W=n.n(L),Y=n(44),q=(n(60),Object(R.a)({root:{eight:"auto",flexGrow:1,maxWidth:"100vh"}})),K=function(e){var t=q(),n=function(t){e.documentEditMode?Object(Y.confirmAlert)({message:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0435?",buttons:[{label:"\u0414\u0430",onClick:function(){return e.saveEditDocumentText(e.selectedDataId)}},{label:"\u041d\u0435\u0442",onClick:function(){return e.getDocumentById(e.selectedDataId)}}]}):(e.setSelectedDataId(t),e.getDocumentById(t))},a=function e(t){return c.a.createElement(z.a,{onClick:function(){return"document"===t.type?n(t.id):null},key:t.id,nodeId:t.id,label:t.name},Array.isArray(t.children)?t.children.map((function(t){return e(t)})):null)};return c.a.createElement("div",{className:U.a.documents__sourceTree},c.a.createElement(X.a,{className:t.root,defaultCollapseIcon:c.a.createElement(J.a,null),defaultExpanded:["root"],defaultExpandIcon:c.a.createElement(W.a,null)},a(e.documentsData)),c.a.createElement(X.a,{className:t.root,defaultCollapseIcon:c.a.createElement(J.a,null),defaultExpanded:["root"],defaultExpandIcon:c.a.createElement(W.a,null)},a(e.dialogsData)))},Z={sourceTreeData:{dialogsData:{id:"root",name:"\u041f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0430",children:[{id:"1",type:"folder",name:"\u041f\u0430\u0440\u0442\u043d\u0435\u0440\u044b",children:[{id:"1_1",type:"document",name:"\u041f\u0438\u0441\u044c\u043c\u043e 1"},{id:"1_2",type:"document",name:"\u041f\u0438\u0441\u044c\u043c\u043e 2"},{id:"1_3",type:"document",name:"\u041f\u0438\u0441\u044c\u043c\u043e 3"}]},{id:"2",type:"folder",name:"\u0424\u041d\u0421",children:[{id:"2_1",type:"document",name:"\u0418\u0437\u0432\u0435\u0449\u0435\u043d\u0438\u0435 1"},{id:"2_2",type:"document",name:"\u0418\u0437\u0432\u0435\u0449\u0435\u043d\u0438\u0435 2"},{id:"2_3",type:"document",name:"\u0418\u0437\u0432\u0435\u0449\u0435\u043d\u0438\u0435 3"}]}]},documentsData:{id:"root",type:"folder",name:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b",children:[{id:"3",type:"folder",name:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440\u0430",children:[{id:"3_1",type:"document",name:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440 1"},{id:"3_2",type:"document",name:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440 2"},{id:"3_3",type:"document",name:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440 3"}]},{id:"4",type:"folder",name:"\u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u0438",children:[{id:"4_1",type:"document",name:"\u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f 1"},{id:"4_2",type:"document",name:"\u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f 2"},{id:"4_3",type:"document",name:"\u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f 3"}]}]}},selectedDataId:null},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SELECTED_DATA_ID":return Object(f.a)(Object(f.a)({},e),{},{selectedDataId:t.dataId});default:return e}},P=Object(O.b)((function(e){return{sourceTreeData:e.sourceTree.sourceTreeData,selectedDataId:e.sourceTree.selectedDataId,documentEditMode:e.documentViewer.documentEditMode}}),{setSelectedDataId:function(e){return{type:"SET_SELECTED_DATA_ID",dataId:e}},getDocumentById:function(e){return{type:"GET_DOCUMENT_BY_ID",documentId:e}},saveEditDocumentText:x})((function(e){return c.a.createElement(K,{dialogsData:e.sourceTreeData.dialogsData,documentsData:e.sourceTreeData.documentsData,setSelectedDataId:e.setSelectedDataId,getDocumentById:e.getDocumentById,documentEditMode:e.documentEditMode,saveEditDocumentText:e.saveEditDocumentText,selectedDataId:e.selectedDataId})})),Q=function(e){return c.a.createElement("div",{className:u.a.container},c.a.createElement(v,null),c.a.createElement("div",{className:u.a.wrapper},c.a.createElement(P,null),c.a.createElement(V,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=n(20),te=Object(ee.b)({sourceTree:$,documentViewer:h}),ne=Object(ee.c)(te);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O.a,{store:ne},c.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.1cb0e047.chunk.js.map