import { combineReducers } from 'redux'

import {LOG_IN} from './actions'

const logIn = (state = '', action) => {
  if (action.type === LOG_IN) {
    return action.payload
  }
  return state
}

const rootReducer = combineReducers({logIn})

export default rootReducer