import React, { Component } from 'react'

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }
    
  render() {
    return (
      <div className='users'>
        { this.state.users }
      </div>
    )
  }
}