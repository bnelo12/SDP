import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { registerIonic, IonApp, IonSplitPane, IonMenu } from '@ionic/react';

import App from './App.js';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import './index.scss';

var main = function () {
  registerIonic();
  var routes = (
    <Route path="/" component={App}>
    </Route>
 );

 ReactDOM.render(
     <BrowserRouter>
        <IonApp>
            <IonSplitPane contentId="main">
                <IonMenu contentId="main">hello</IonMenu> 
                <div id="main" className="ion-page">
                    <Switch>
                        {routes}
                    </Switch>
                </div>
            </IonSplitPane>
        </IonApp>
     </BrowserRouter>
     , document.getElementById('root')); 
};

main();
