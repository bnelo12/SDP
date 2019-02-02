import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { IonApp, IonSplitPane } from '@ionic/react';

import Login from './pages/Login'
import Menu from './components/Menu'

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import './theme/variables.scss';

class App extends Component {

  routes() {
    return (
      <Route path='/' component={ Login }/>
    );
  }

  render() {
    return (
      <BrowserRouter>
        <IonApp>
          <IonSplitPane contentId='main'>
            <Menu/>
            <div id='main' className='ion-page'>
              <Switch>
                {this.routes()}
              </Switch>
            </div>
          </IonSplitPane>
        </IonApp>
      </BrowserRouter>
    );
  }
}

export default App;

// var main = function () {
//   registerIonic();
//   var routes = (
//     <Route path="/" component={App}>
//     </Route>
//  );

//  ReactDOM.render(
//      <BrowserRouter>
//         <IonApp>
//             <IonSplitPane contentId="main">
//                 <IonMenu contentId="main">hello</IonMenu> 
//                 <div id="main" className="ion-page">
//                     <Switch>
//                         {routes}
//                     </Switch>
//                 </div>
//             </IonSplitPane>
//         </IonApp>
//      </BrowserRouter>
//      , document.getElementById('root')); 
// };

// main();

// <>
// <IonHeader>
//   <IonToolbar>
//     <IonButtons slot="start">
//       <IonMenuButton></IonMenuButton>
//     </IonButtons>
//     <IonTitle>Signup</IonTitle>
//   </IonToolbar>
// </IonHeader>

// <IonContent>
//     <IonButton>Create</IonButton>
// </IonContent>
// </>
