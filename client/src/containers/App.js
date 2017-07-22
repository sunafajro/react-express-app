import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Home from '../components/Home';
import Admin from '../components/Admin';
import Users from '../components/Users';
import Login from '../components/Login';
import UserMenu from '../components/UserMenu';
import GuestMenu from '../components/GuestMenu';


class App extends Component {

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconElementRight={this.props.isGuest ? <GuestMenu /> : <UserMenu />}
        />            
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/admin' component={ Admin } />
          <Route path='/users' component={ Users } />
          <Route path='/login' component={ Login } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isGuest: state.appState.isGuest
});

export default connect(mapStateToProps, null)(App);
