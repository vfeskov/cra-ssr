import { RECEIVE_POSTS, ERROR_POSTS } from '../actions'

export function inited (state = false, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
    case ERROR_POSTS:
      return true
    default:
      return state
  }
}
