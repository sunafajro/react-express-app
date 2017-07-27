export const APP_LOGIN = 'APP_LOGIN';
export const APP_LOGIN_SUCCESS = 'APP_LOGIN_SUCCESS';
export const APP_LOGIN_FAILED = 'APP_LOGIN_FAILED';
export const APP_LOGOUT = 'APP_LOGOUT';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_LOADING = 'FETCH_POSTS_LOADING';
export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'

/* действия при входе в систему */
export const appLogin = (formData) => {
  return dispatch => {
      dispatch({
        type: APP_LOGIN
    });
    
    const body = JSON.stringify(formData);
    
    fetch('/api/login', {
      method: 'POST',
      accept: 'application/json',
      credentials:'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
    .then(response => {
      if (response.status >= 400) {
        throw new Error('Bad response!');
      }
      return response.json();
    })
    .then(response => {
      setTimeout(() => {
        dispatch(appLoginSuccess(response.result));
        }, 500);
    })
    .catch(err => {
      dispatch(appLoginFailed(err));
    });
  }
}
/* успешный вход */
export const appLoginSuccess = (response) => {
  return dispatch => {
      dispatch({
        type: APP_LOGIN_SUCCESS,
        response
    });
  }
}
/* произошла ошибка */
export const appLoginFailed = (err) => {
  return dispatch => {
      dispatch({
        type: APP_LOGIN_FAILED,
        err
    });
  }
}

export const appLogout = () => {
  return dispatch => {
      dispatch({
        type: APP_LOGOUT
    });
  }
}

/* основной экшен осуществляющий запрос новых сообщений из api */
export const fetchPosts = () => {
  return dispatch => {
    dispatch({
      type: FETCH_POSTS
    });
    fetch('/api/posts', { credentials: 'include' })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
        /* если данные получены вызываем экшен сообщающий об успехе */
        .then((posts) => dispatch( fetchPostsSuccess(posts.posts) ))
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
  console.log(err);
  return dispatch => {
    dispatch({
      type: FETCH_POSTS_FAILED 
    });
  };
};