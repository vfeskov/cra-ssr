import { combineReducers } from 'redux'
import { posts } from './posts'
import { inited } from './inited'

export const root = combineReducers({
  posts,
  inited
})
