export const POSTS_HAS_ERRORED = 'POSTS_HAS_ERRORED'
export const POSTS_IS_LOADING = 'POSTS_IS_LOADING'
export const POSTS_FETCH_DATA_SUCCESS = 'POSTS_FETCH_DATA_SUCCESS'

// посты не получены из-за ошибки api
export function postsHasErrored(bool) {
  return {
    type: POSTS_HAS_ERRORED,
    hasErrored: bool
  }
}
// посты в процессе загрузки
export function postsIsLoading(bool) {
  return {
    type: POSTS_IS_LOADING,
    isLoading: bool
  }
}
// посты успешно загружены
export function postsFetchDataSuccess(posts) {
  return {
    type: POSTS_FETCH_DATA_SUCCESS,
    posts
  }
}
// основной экшен который непосредственно скачивает посты и вызывает три верхних экшена
export function postsFetchData(url) {
    return (dispatch) => {
        dispatch(postsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(postsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((posts) => dispatch(postsFetchDataSuccess(posts)))
            .catch(() => dispatch(postsHasErrored(true)));
    };
}