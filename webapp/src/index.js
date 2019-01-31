import ReactDOM from 'react-dom';
import React from 'react';
import './index.scss';
import { Router, Route, IndexRoute } from "react-router";
import { browserHistory } from 'react-router'
import App from './App.js';
import Page from './Page.js';

var main = function () {

  var routes = (
    <Route path="/" component={App}>
    </Route>
 );

 ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('root'));
 
};

main();
