import React, { Component } from 'react'

export default class Home extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    fetch('/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    return (
      <div className="Home">
        <h1>Last posts:</h1>
        { this.state.posts.map(post =>
          <div key={ post.id }>
            <h4>{ post.title }</h4>
            <p>{ post.body }</p>
          </div>
        ) }
      </div>
    )
  }
}