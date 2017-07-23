import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import appState from './reducers'

export default combineReducers({
  routing: routerReducer,
  appState
})