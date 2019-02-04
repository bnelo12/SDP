import React, { Component } from 'react';
import {IonHeader, IonToolbar, IonMenuButton, IonButtons, IonTitle } from '@ionic/react'


class Return extends Component {
    render() {
        return (
            <div>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Return Items</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </div>
        );
    }
}

export default Return;