import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { appLogout } from '../actions/index';

class Navigation extends React.Component{

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">{ this.props.appTitle }</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse" aria-expanded="false" style={{ height: '1px' }}>
            <ul className="nav navbar-nav navbar-right">
              <li>
              {
                this.props.isGuest ? 
                  <Link to="/login">Войти</Link> :
                  <a onClick={ this.props.appLogout }>Выйти</a>
              }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  isGuest: state.appState.isGuest
});

const mapDispatchToProps = dispatch => bindActionCreators({
  appLogout,
  goTo: (path) => push(path)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);