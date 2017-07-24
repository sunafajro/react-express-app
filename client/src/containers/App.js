import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import { Route, Switch, Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//import { push } from 'react-router-redux';
import { Menu, Icon } from 'antd';
import './App.css'
import Home from '../components/Home';
import Admin from '../components/Admin';
import Users from '../components/Users';
import Login from '../components/Login';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentMenuItem: 'home'
    }
    this.handleMenuClick = this.handleMenuClick.bind(this);  
  }

  handleMenuClick(event) {
    this.setState({ currentMenuItem: event.key });
  }

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleMenuClick}
          selectedKeys={[ this.state.currentMenuItem ]}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <Icon type="home" /> <Link to="/" />
          </Menu.Item>
          <Menu.Item key="login">
            <Icon type="login" /> <Link to="/login" />
          </Menu.Item>
          <Menu.Item key="Admin">
            <Icon type="admin" /> <Link to="/admin" />
          </Menu.Item>
        </Menu>
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

// const mapStateToProps = state => ({
//   isGuest: state.appState.isGuest
// });

// const mapDispatchToProps = dispatch => bindActionCreators({
//   handleClickOnTitle: () => push('/')
// }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
