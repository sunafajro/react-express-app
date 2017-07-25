import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../components/Navigation.js';
import Home from '../components/Home';
import Admin from '../components/Admin';
import Users from '../components/Users';
import Login from '../components/Login';
import Footer from '../components/Footer';

class App extends React.Component {

  render() {
    return (
      <div>
        <Navigation appTitle="Личный кабинет" />
        <div className="container content-container">
          <Switch>      
            <Route exact path='/admin' component={ Admin } />
            <Route exact path='/users' component={ Users } />
            <Route exact path='/login' component={ Login } />
            <Route exact path='/' component={ Home } />
          </Switch>
        </div>
        <Footer author="Evgeny Belkin" />
      </div>
    );
  }
}

export default App;
