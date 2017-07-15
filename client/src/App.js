import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
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
      <div className="App">
        <h1>Last posts:</h1>
        { this.state.posts.map(post =>
          <div key={ post.id }>
            <h4>{ post.title }</h4>
            <p>{ post.body }</p>
          </div>
        ) }
      </div>
    );
  }
}

export default App;
