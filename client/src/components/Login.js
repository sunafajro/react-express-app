import React from 'react';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import md5 from 'js-md5';
import { appLogin } from '../actions/index';

class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleButton = () => {
    if (this.state.username !== '' && this.state.password !== '') {
      this.props.appLogin({
        login: this.state.username,
        pass: md5(this.state.password)
      });
    }
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
              onChange={ (e) => this.setState({ username: e.nativeEvent.target.value }) }
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
              onChange={ (e) => this.setState({ password: e.nativeEvent.target.value }) }
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