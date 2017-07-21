import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import registerServiceWorker from "./utils/registerServiceWorker";

// Material-UI temporary dependency

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
