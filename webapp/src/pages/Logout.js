import React, { Component } from 'react';
import {IonHeader, IonToolbar, IonMenuButton, IonButtons, IonTitle, IonContent } from '@ionic/react'


class Logout extends Component {
    render() {
        return (
            <div>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Logout</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                </IonContent>
            </div>
        );
    }
}

export default Logout;