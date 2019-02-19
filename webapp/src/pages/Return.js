import React, { Component } from 'react';
import {IonHeader, IonToolbar, IonMenuButton, IonButtons, IonTitle, IonContent } from '@ionic/react'


class Return extends Component {
    render() {
        return (
            <>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Return Items</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                </IonContent>
            </>
        );
    }
}

export default Return;