import {createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)