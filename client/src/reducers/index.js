import { combineReducers } from 'redux'
import {
  GET_POSTS, GET_USERS
} from '../actions'

const postsReducer = (state = { }, action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.something
    default:
      return state
  }
}

const usersReducer = (state = { }, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.something
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsReducer
})

export default rootReducer