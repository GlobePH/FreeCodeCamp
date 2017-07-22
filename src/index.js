import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from 'react-router-dom';

import "./styles/index.css";

// Material-UI temporary dependency

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>, 
  document.getElementById("root")
);
