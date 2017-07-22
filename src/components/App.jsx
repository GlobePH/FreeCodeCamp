import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'

import Header from './Header'
import Login from './Login'
import Landing from './Landing'

const App = () => (
  <Provider store={store}>
    <div>
      <Header/>
      <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </div>
  </Provider>
)

export default App
