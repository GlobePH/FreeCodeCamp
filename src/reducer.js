import { combineReducers } from 'redux'

import auth from './actions/login'

const rootReducer = combineReducers({
  auth
});

export default rootReducer
