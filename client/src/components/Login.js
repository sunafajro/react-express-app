import React from 'react';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { appLogin } from '../actions/index';

class Login extends React.Component {
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
    this.props.appLogin();
  }

  render() {
    if (!this.props.isGuest) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="username">Логин</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Введите имя пользователя..."
              value={ this.state.username }
              onChange={ this.handleUsernameField }
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Введите пароль..."
              value={ this.state.password }              
              onChange={ this.handlePasswordField }
            />
          </div>
          <button type="submit" className="btn btn-default" onClick={ this.handleButton }>Войти</button>
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