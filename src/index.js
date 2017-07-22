import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Login from "./components/Login";
import registerServiceWorker from "./utils/registerServiceWorker";

// Material-UI temporary dependency

ReactDOM.render(<Login />, document.getElementById("root"));
registerServiceWorker();
