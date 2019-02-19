import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { registerIonic } from '@ionic/react';
import * as serviceWorker from './serviceWorker';

import firebase from "firebase/app";

import store from './store/store';

import App from './App.js';

var config = {
    apiKey: "AIzaSyAt6aZMXcgHmf6yJcONvy3liyBhEyT34wA",
    authDomain: "sdpwebapp.firebaseapp.com",
    databaseURL: "https://sdpwebapp.firebaseio.com",
    projectId: "sdpwebapp",
};
firebase.initializeApp(config);

registerIonic();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();