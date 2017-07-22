import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

<<<<<<< HEAD
import Header from "./Header";
import Login from "./Login";
import Landing from "./Landing";
import ProductIndex from "./ProductIndex";
=======
import Header from './Header'
import Login from './Login'
import Landing from './Landing'
import ProductIndex from './ProductIndex';
>>>>>>> e3b254f2f3b62e9cf4ef15476f824314e43c0236

const App = () =>
  <Provider store={store}>
    <div>
      <Header />
      <Switch>
<<<<<<< HEAD
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/crops" component={ProductIndex} />
=======
        <Route path='/' exact component={Landing}/>
        <Route path='/login' component={Login}/>
        <Route path='/product' component={ProductIndex} />
>>>>>>> e3b254f2f3b62e9cf4ef15476f824314e43c0236
      </Switch>
    </div>
  </Provider>;

export default App;
