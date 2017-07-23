import {
  APP_LOGIN, APP_LOGOUT, FETCH_POSTS, FETCH_POSTS_FAILED, FETCH_POSTS_SUCCESS
} from '../actions/index'

const appInitialState = {
  isGuest: true,
  postsLoading: false,
  posts: [],
  err: false
}

export default (state = appInitialState, action) => {
  switch (action.type) {
    case APP_LOGIN:
      return {
        ...state,
        isGuest: false
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