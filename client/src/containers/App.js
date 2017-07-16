import React, { Component } from 'react';
import { Provider } from 'react-redux'
//import logo from './logo.svg';
//import './App.css';
import Home from '../components/Home';
import Admin from '../components/Admin';
import Users from '../components/Users';
import Login from '../components/Login';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <nav>
              <div class="nav-wrapper">
                <a href="#" class="brand-logo">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/admin">Admin</Link></li>
                  <li><Link to="/users">Users</Link></li>
                  <li><Link to="/login">Login</Link></li>
                </ul>
              </div>
            </nav>
    
            <Route exact path='/' component={ Home } />
            <Route path='/admin' component={ Admin } />
            <Route path='/users' component={ Users } />
            <Route path='/login' component={ Login } />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
