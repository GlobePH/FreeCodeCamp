import { combineReducers } from 'redux'
import { firebaseStateReducer as firebase } from 'react-redux-firebase'
import auth from './actions/login'

const rootReducer = combineReducers({
  auth,
  firebase
})

export default rootReducer
