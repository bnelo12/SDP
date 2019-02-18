import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './store/store';

import Login from './pages/Login'
import Home from './pages/Home'

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import './theme/variables.scss';

console.log(store.getState());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/home' component={Home}/>
            <Route path='/' render={() => (
              <Redirect to='/home'/>
            )}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;