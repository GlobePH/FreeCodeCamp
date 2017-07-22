import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducer'

const store = createStore(
  reducer,
  compose(
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
)

export default store
