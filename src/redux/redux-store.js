import { createStore, combineReducers } from "redux";
import sourceTreeReducer from "./sourceTreeReducer";
import documentViewerReducer from "./documentViewerReducer";

let reducers = combineReducers({
  sourceTree: sourceTreeReducer,
  documentViewer: documentViewerReducer,
});

let store = createStore(reducers);

export default store;
