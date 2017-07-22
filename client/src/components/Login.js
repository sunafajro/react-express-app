import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { appLogin } from '../actions/index'

// const FormItem = Form.Item;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }

    // this.handleButton = this.handleButton.bind(this);
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

  // handleButton(event) {
  //   console.log('Button pressed');
  // }

  render() {
    if (!this.props.isGuest) {
      return <Redirect push to="/" />;
    } else {
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
            <RaisedButton label="Login" onClick={ this.props.appLogin } />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  isGuest: state.appState.isGuest
});

const mapDispatchToProps = dispatch => bindActionCreators({
  appLogin
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Login);