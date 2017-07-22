import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reactReduxFirebase } from 'react-redux-firebase'
import reducer from './reducer'



const config = {
  apiKey: 'AIzaSyAQPIoN8G0GV9hYd1mN30Y6mKjFLGQhnqA',
  authDomain: 'globe-hackathon.firebaseapp.com',
  databaseURL: 'https://globe-hackathon.firebaseio.com',
  projectId: 'globe-hackathon',
  storageBucket: 'globe-hackathon.appspot.com',
  messagingSenderId: '246767341490'
}


const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    reactReduxFirebase(config),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
)

export default store
