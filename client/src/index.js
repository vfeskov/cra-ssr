import React from 'react'
import 'isomorphic-fetch'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { unregister } from './registerServiceWorker'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { root } from './reducers'

const initState = window.__INIT_STATE__ && JSON.parse(window.__INIT_STATE__)

const store = createStore(root, initState, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

unregister()
