import React, { Component } from 'react';
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
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>

          <hr/>
          <Route exact path='/' component={ Home } />
          <Route path='/admin' component={ Admin } />
          <Route path='/users' component={ Users } />
          <Route path='/login' component={ Login } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
