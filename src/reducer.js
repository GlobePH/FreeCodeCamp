import { combineReducers } from 'redux'
import { firebaseStateReducer as firebase } from 'react-redux-firebase'
import auth from './actions/login'
import cart from './actions/cart'

const rootReducer = combineReducers({
  auth,
  cart,
  firebase
})

export default rootReducer
