import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// const FormItem = Form.Item;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }

    this.handleButton = this.handleButton.bind(this);
    this.handleUsernameField = this.handleUsernameField.bind(this);
    this.handlePasswordField = this.handlePasswordField.bind(this);
  }

  handleUsernameField(event) {
    let val = event.target.value;
    this.setState({ username: val});
  }

  handlePasswordField(event) {
    let val = event.target.value;
    this.setState({ password: val});
  }

  handleButton(event) {
    console.log('Button pressed');
  }

  render() {

    return (
      <div className="LoginForm">
        <h3>Login Form</h3>
          <TextField
            hintText="Введите имя пользователя..."
            value={this.state.username}
            floatingLabelText="Username"
            onChange={ this.handleUsernameField }
          /><br />
          <TextField
            hintText="Введите пароль..."
            value={this.state.password}
            floatingLabelText="Password"
            type="password"
            onChange={ this.handlePasswordField }
          /><br />
          <RaisedButton label="Login" onClick={ this.handleButton } />
      </div>
    );
  }
}

// const Login = Form.create()(NormalLoginForm);

export default Login;