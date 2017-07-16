export const GET_POSTS = 'GET_POSTS'
export const GET_USERS = 'GET_USERS'

export const getPosts = something => ({
  type: GET_POSTS,
  something
})

export const getUsers = something => ({
  type: GET_USERS,
  something
})