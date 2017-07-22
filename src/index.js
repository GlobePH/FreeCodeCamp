import React from "react";
import {render} from "react-dom";
import App from "./components/App";
import { BrowserRouter } from 'react-router-dom';

const renderApp = () => {
  render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    document.getElementById("root")
  )
}

renderApp()

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp()
  })
}


