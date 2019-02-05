import React, { Component } from 'react';
import {IonHeader, IonToolbar, IonMenuButton, IonButtons, IonTitle, IonContent } from '@ionic/react'


class Inventory extends Component {
    render() {
        return (
            <>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>My Inventory</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                </IonContent>
            </>
        );
    }
}

export default Inventory;