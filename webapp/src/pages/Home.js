import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { IonApp, IonSplitPane, IonRouterOutlet } from '@ionic/react';

import authenticatedPage from './authenticatedPage';

import Menu from '../components/Menu';
import Cart from './Cart';
import Browse from './Browse';
import Return from './Return';
import Logout from './Logout';


class Home extends Component {
    render() {
        return (
            <IonApp>
                <IonSplitPane contentId='main'>
                    <Menu/>
                    <div id='main' className='ion-page'>
                        <Route exact path="/home" render={() => <Redirect to="/home/browse"/>}/>
                        <IonRouterOutlet>
                            <Route path="/home/browse" component={ Browse } exact={true}/>
                            <Route path="/home/return" component={ Return } exact={true}/>
                            <Route path="/home/cart" component={ Cart } exact={true}/>
                            <Route path="/home/logout" component={ Logout } exact={true}/>
                        </IonRouterOutlet>
                    </div>
                </IonSplitPane>
            </IonApp>
        );
    }
}

export default authenticatedPage(Home);