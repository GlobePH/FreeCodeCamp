import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '../store'

import Header from './Header'
import Login from './Login'
import Landing from './Landing'
import ProductIndex from './ProductIndex'
import ProductDetail from './ProductDetail'
import Cart from './Cart'

const initialState = window.__INITIAL_STATE__ || {firebase: {authError: null}}
const store = configureStore(initialState)

const App = () =>
  <Provider store={store}>
    <div>
      <Header/>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/login" component={Login}/>
        <Route path="/crops" exact component={ProductIndex}/>
        <Route path='/crops/:id' component={ProductDetail}/>
        <Route path="/cart" component={Cart}/>
      </Switch>
    </div>
  </Provider>

export default App
