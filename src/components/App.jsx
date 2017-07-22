import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import Header from "./Header";
import Login from "./Login";
import Landing from "./Landing";
import ProductIndex from "./ProductIndex";

const App = () =>
  <Provider store={store}>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/crops" component={ProductIndex} />
      </Switch>
    </div>
  </Provider>;

export default App;
