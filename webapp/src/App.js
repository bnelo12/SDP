import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from "react-router-dom";

import history from './history';

import Login from './pages/Login'
import Home from './pages/Home'

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import './theme/variables.scss';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/home' component={Home} />
                    <Route path='/' render={() => (
                        <Redirect to='/home' />
                    )} />
                </Switch>
            </Router>
        );
    }
}

export default App;