export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ERROR_POSTS = 'ERROR_POSTS'

export function requestPosts () {
  return {
    type: REQUEST_POSTS
  }
}

export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function errorPosts () {
  return {
    type: ERROR_POSTS
  }
}

export function fetchPosts () {
  return dispatch => {
    return fetch('/api/posts')
      .then(response => {
        if (response.status === 200) {
          return response.json()
        }
        throw new Error(response.statusText)
      })
      .then(
        posts => dispatch(receivePosts(posts)),
        () => dispatch(errorPosts())
      )
  }
}
