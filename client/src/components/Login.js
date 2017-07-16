import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.changeUsernameValue = this.changeUsernameValue.bind(this);
    this.changePasswordValue = this.changePasswordValue.bind(this);
  }

  changeUsernameValue (event) {
    const username = event.target.value;
    this.setState({ username: username });
  }

  changePasswordValue (event) {
    const password = event.target.value;
    this.setState({ password: password });
  }

  render() {
    return (
      <div className="row">
        <div className="col s6">
          <div className="row">
            <div className='input-field col s12 offset-s3'>
                <input
                className="form-control"
                type="text"
                name="username"
                value={ this.state.username } 
                onChange={ this.changeUsernameValue } />
            </div>
            <div className='input-field col s12 offset-s3'>
                <input
                className="form-control"
                type="password"
                name="password"
                value={ this.state.password }
                onChange={ this.changePasswordValue }
                />
            </div>
            <div className="col s12 offset-s3">
                <input 
                className="btn waves-effect waves-light"
                type="submit" 
                name="btn" 
                value="Send" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}