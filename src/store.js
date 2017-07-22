import { createStore, compose } from "redux";
import reducer from "./reducer";

const composeEnhancers =
  typeof window === "object" &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
const store = createStore(reducer, composeEnhancers());

export default store;
