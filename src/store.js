import { createStore, compose } from 'redux'
import reducer from './reducer'

<<<<<<< HEAD
const composeEnhancers = typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose 
const store = createStore(
  reducer,
  composeEnhancers()
)
=======
const store = createStore(reducer);
>>>>>>> Update

export default store
