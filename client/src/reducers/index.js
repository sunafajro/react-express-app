import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {
  APP_LOGIN, APP_LOGOUT, FETCH_POSTS, FETCH_POSTS_FAILED, FETCH_POSTS_SUCCESS
} from '../actions/index'

const globalInitialState = {
  isGuest: true
}

const postsInitialState = {
  postsLoading: false,
  posts: [],
  err: null
}

const appState = (state = globalInitialState, action) => {
  switch (action.type) {
    case APP_LOGIN:
      return {
        ...state,
        isGuest: action.isGuest
      }
    case APP_LOGOUT:
      return {
        ...state,
        isGuest: action.isGuest
      }
    default:
    return state;
  }
}

const postsState = (state = postsInitialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        postsLoading: true
      }
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        postsLoading: false,
        posts: action.posts,
        err: null
      }
    case FETCH_POSTS_FAILED:
      return {
        ...state,
        postsLoading: false,
        posts: [],
        err: action.err
      }

    default:
      return state;
  }
}

export default combineReducers({
  routing: routerReducer,
  appState,
  postsState
})