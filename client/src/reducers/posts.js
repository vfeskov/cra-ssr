import { RECEIVE_POSTS, ERROR_POSTS } from '../actions'

export function posts (state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return [...action.posts]
    case ERROR_POSTS:
      return []
    default:
      return state
  }
}
