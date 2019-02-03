import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { IonApp, IonSplitPane } from '@ionic/react';

import firebase from "firebase/app";
import "firebase/auth";

import Login from './pages/Login'
import Menu from './components/Menu'

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import './theme/variables.scss';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/' render={() => (
            firebase.auth().currentUser ? (
              <IonApp>
                <IonSplitPane contentId='main'>
                  <Menu/>
                    <div id='main' className='ion-page'>
                      <Switch>
                        {/* {this.routes()} */}
                      </Switch>
                    </div>
                </IonSplitPane>
              </IonApp>
            ) : (
              <Redirect to="/login"/>
            )
          )}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;