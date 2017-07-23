import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import AppBar from 'material-ui/AppBar';
import Home from '../components/Home';
import Admin from '../components/Admin';
import Users from '../components/Users';
import Login from '../components/Login';
import UserMenu from '../components/UserMenu';
import GuestMenu from '../components/GuestMenu';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class App extends Component {

  render() {
    return (
      <div>
        <AppBar
          title={<span style={styles.title}>Личный кабинет</span>}
          onTitleTouchTap={ this.props.handleClickOnTitle }
          iconElementRight={this.props.isGuest ? <GuestMenu /> : <UserMenu />}
        />
        <Switch>      
          <Route exact path='/admin' component={ Admin } />
          <Route exact path='/users' component={ Users } />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/' component={ Home } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isGuest: state.appState.isGuest
});

const mapDispatchToProps = dispatch => bindActionCreators({
  handleClickOnTitle: () => push('/')
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
