export const APP_LOGIN = 'APP_LOGIN';
export const APP_LOGOUT = 'APP_LOGOUT';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_LOADING = 'FETCH_POSTS_LOADING';
export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'

export const appLogin = () => {
  return dispatch => {
      dispatch({
        type: APP_LOGIN,
        isGuest: false
    });
  }
}

export const appLogout = () => {
  return dispatch => {
      dispatch({
        type: APP_LOGOUT,
        isGuest: true
    });
  }
}

/* основной экшен осуществляющий запрос новых сообщений из api */
export const fetchPosts = () => {
  return dispatch => {
    dispatch({
      type: FETCH_POSTS
    });
    fetch('/api/posts')
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
        /* если данные получены вызываем экшен сообщающий об успехе */
        .then((posts) => dispatch( fetchPostsSuccess(posts) ))
        /* если произошла ошибка вызыываем экшен сообщающий об ошибке */
        .catch((err) => dispatch( fetchPostsFailed(err) ));
  }
};

/* экшен сообщающий что посты успешно загружены */
export const fetchPostsSuccess = (posts) => {
  return dispatch => {
    dispatch({
      type: FETCH_POSTS_SUCCESS,
      posts
    })
  }
};

/* экшен сообщающий что при загрузке постов произошла ошибка */
export const fetchPostsFailed = (err) => {
  return dispatch => {
    dispatch({
      type: FETCH_POSTS_FAILED,
      posts: err    
    });
  };
};