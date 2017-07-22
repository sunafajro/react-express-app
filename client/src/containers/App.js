import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Home from '../components/Home';
import Admin from '../components/Admin';
import Users from '../components/Users';
import Login from '../components/Login';
import UserMenu from '../components/UserMenu';
import GuestMenu from '../components/GuestMenu';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      logged: false
    }
  }

  render() {
    return (
        <BrowserRouter>
          <div>
            <AppBar
              title="Title"
              iconElementRight={this.state.logged ? <UserMenu /> : <GuestMenu />}
            />            
    
            <Route exact path='/' component={ Home } store={this.props.store} />
            <Route path='/admin' component={ Admin } />
            <Route path='/users' component={ Users } />
            <Route path='/login' component={ Login } />
          </div>          
        </BrowserRouter>
    );
  }
}

export default App;
