import React, { Component } from 'react';
import { AuthenticatedPage } from './AuthenticatedPage';
import { Route } from 'react-router-dom';

import { IonApp, IonSplitPane, IonRouterOutlet } from '@ionic/react';

import Menu from '../components/Menu';
import Inventory from './Inventory';
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
                        <IonRouterOutlet>
                            <Route path="/home/browse" component={ Browse } exact={true}/>
                            <Route path="/home/return" component={ Return } exact={true}/>
                            <Route path="/home/inventory" component={ Inventory } exact={true}/>
                            <Route path="/home/logout" component={ Logout } exact={true}/>
                        </IonRouterOutlet>
                    </div>
                </IonSplitPane>
            </IonApp>
        );
    }
}

export default AuthenticatedPage(Home);