import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../store";

import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Landing from "./Landing";
import ProductIndex from "./ProductIndex";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import TrackingPurchase from "./TrackingPurchase";
import Checkout from './Checkout'

import "../styles/index.css";

const initialState = window.__INITIAL_STATE__ || {
  firebase: { authError: null }
};
const store = configureStore(initialState);

const App = () =>
  <Provider store={store}>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route path="/crops" exact component={ProductIndex} />
        <Route path="/crops/:id" component={ProductDetail} />
        <Route path="/login" component={Login} />
        <Route path="/product" component={ProductIndex} />
        <Route path="/tracking-purchase" component={TrackingPurchase} />
        <Route path="/checkout" component={Checkout}/>
      </Switch>
      <Footer />
    </div>
  </Provider>;

export default App;
