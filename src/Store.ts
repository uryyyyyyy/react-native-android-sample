import counter from './counter/module'
import { createStore, combineReducers } from 'redux'

export default createStore(
  combineReducers({
    counter: counter
  })
);