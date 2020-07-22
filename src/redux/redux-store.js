import { createStore, combineReducers } from "redux";
import sourceTreeReducer from "./sourceTreeReducer";

let reducers = combineReducers({
  sourceTree: sourceTreeReducer,
});

let store = createStore(reducers);

export default store;
