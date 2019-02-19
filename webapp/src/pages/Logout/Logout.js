import React, { Component } from 'react';
import {IonHeader, IonToolbar, IonMenuButton, IonButton, IonButtons, IonTitle, IonCard, IonCardTitle, IonCardContent, IonContent } from '@ionic/react'

import './Logout.scss'


class Logout extends Component {

    render() {
        const handleLogoutClicked = (event) => {
            event.stopPropagation();
            this.props.userDispatch.logout();
        }
        return (
            <>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Logout</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent id='logout-page'>
                    <IonCard>
                        <IonCardTitle>Are you sure you want to logout?</IonCardTitle>
                        <IonCardContent>
                            <IonButton color='danger' onClick={handleLogoutClicked}>Logout</IonButton>
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </>
        );
    }
}

export default Logout;