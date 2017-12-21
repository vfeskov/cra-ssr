import React from 'react'
import { createStore } from 'redux'
import { root } from './reducers'
import { receivePosts, errorPosts } from './actions'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { App } from './App'

export function renderToStrings (posts) {
  const store = createStore(root)
  store.dispatch(
    posts ? receivePosts(posts) : errorPosts()
  )

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const state = JSON.stringify(JSON.stringify(store.getState()))

  return { html, state }
}
