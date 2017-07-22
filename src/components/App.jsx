import React from 'react'
import * as firebase from 'firebase'
import 'firebase/database'
import { Switch, Route } from 'react-router-dom'
import firebaseui from 'firebaseui'
import { Provider } from 'react-redux'
import store from '../store'

import Header from './Header'
import Login from './Login'
import Landing from './Landing'

console.log('++++', firebase)

const App = () => {
  return (
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
}

export default App
