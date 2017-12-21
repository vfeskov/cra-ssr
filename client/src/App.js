import React, { Component } from 'react'
import * as actionCreators from './actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class AppComponent extends Component {
  render () {
    return (
      <div className="App">
        {this.props.posts.map(post =>
          <div className="post" key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
          </div>
        )}
      </div>
    )
  }

  componentDidMount () {
    const { inited, fetchPosts } = this.props
    if (!inited) { fetchPosts() }
  }
}

export const App = connect(
  state => ({
    posts: state.posts,
    inited: state.inited
  }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(AppComponent)

export default App
