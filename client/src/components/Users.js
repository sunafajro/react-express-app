import React, { Component } from 'react'

export default class Users extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
    
  render() {
    return (
      <div className='users'>
        <h1>List of Users:</h1>
        { this.state.users.map(user =>
          <div key={ user.id }>
            <h4>{ user.username }</h4>
            <p>{ user.password }</p>
          </div>
        ) }
      </div>
    )
  }
}