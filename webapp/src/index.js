import React from 'react';
import ReactDOM from 'react-dom';
import { registerIonic } from '@ionic/react';
import * as serviceWorker from './serviceWorker';

import App from './App.js';

registerIonic();
ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();