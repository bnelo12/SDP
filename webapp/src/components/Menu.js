import React from 'react';
import { withRouter } from 'react-router-dom' 
import { IonMenu, IonContent, IonList, IonItem, IonListHeader, IonMenuToggle, IonIcon, IonLabel } from '@ionic/react';

import './Menu.scss'

const routes = {
    navPages: [
        { title: 'Cart', path: '/home/cart', icon: 'cart' },    
        { title: 'Browse Items', path: '/home/browse', icon: 'list' },
        { title: 'Return Items', path: '/home/return', icon: 'return-left' }
    ],
    acctPages: [
        { title: 'Logout', path: '/home/logout', icon: 'log-out' },
        { title: 'Report Issue', path: '/home/report', icon: 'information-circle-outline' }
    ]
};

const Menu = ({ history }) => {

    function mapRoutesToIonListItem(routeList) {
        return routeList.map(route => (
            <IonMenuToggle key={route.title} auto-hide="false">
                <IonItem button onClick={() => history.push(route.path)}>
                    <IonIcon color="light" slot="start" name={route.icon}></IonIcon>
                    <IonLabel color="light">{route.title}</IonLabel>
                </IonItem>
            </IonMenuToggle>
        ));
    }

    return (
        <IonMenu contentId='main'>
            <IonContent>
                <IonList lines="none">
                    <IonListHeader>
                        Manage Items
                    </IonListHeader>
                    { mapRoutesToIonListItem(routes.navPages) }
                </IonList>
                <IonList lines="none">
                    <IonListHeader>
                        Account
                    </IonListHeader>
                    { mapRoutesToIonListItem(routes.acctPages) }
                </IonList>
            </IonContent>
        </IonMenu>
    );
}

export default withRouter(Menu);