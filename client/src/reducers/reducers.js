import {
  APP_LOGIN, 
  APP_LOGIN_SUCCESS,
  APP_LOGIN_FAILED,
  APP_LOGOUT, 
  FETCH_POSTS, 
  FETCH_POSTS_FAILED, 
  FETCH_POSTS_SUCCESS
} from '../actions/index'

const appInitialState = {
  isGuest: true,
  userInfo: [],
  loginPoccess: false,
  postsLoading: false,
  posts: [],
  err: false
}

export default (state = appInitialState, action) => {
  switch (action.type) {
    case APP_LOGIN:
      return {
        ...state,
        loginPoccess: true
      }
    case APP_LOGIN_SUCCESS:
      return {
        ...state,
        isGuest: false,
        loginPoccess: false,
        userInfo: action.response
      }
    case APP_LOGIN_FAILED:
      return {
        ...state,
        loginPoccess: false,
        err: action.err
      }
    case APP_LOGOUT:
      return {
        ...state,
        isGuest: true
      }
    case FETCH_POSTS:
      return {
        ...state,
        postsLoading: true
      }
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        postsLoading: false,
        posts: action.posts
      }
    case FETCH_POSTS_FAILED:
      return {
        ...state,
        postsLoading: false,
        posts: [],
        err: true
      }

    default:
      return state;
  }
}