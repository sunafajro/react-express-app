import { combineReducers } from 'redux'
import {
  POSTS_HAS_ERRORED, POSTS_IS_LOADING, POSTS_FETCH_DATA_SUCCESS
} from '../actions'

function postsHasErrored(state = false, action) {
  switch (action.type) {
    case POSTS_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
}

function postsIsLoading(state = false, action) {
  switch (action.type) {
    case POSTS_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

function posts(state = [], action) {
  switch (action.type) {
    case POSTS_FETCH_DATA_SUCCESS:
      return action.posts;

    default:
      return state;
  }
}

export default combineReducers({
  postsHasErrored,
  postsIsLoading,
  posts
});
