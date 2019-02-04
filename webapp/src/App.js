import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from './pages/Login'
import Home from './pages/Home'
import SplashScreen from './pages/SplashScreen'

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import './theme/variables.scss';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/home' component={Home}/>
          <Route path='/' component={SplashScreen}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;