import React, { Component } from 'react';
import {IonHeader, IonToolbar, IonMenuButton, IonButtons, IonTitle, IonContent } from '@ionic/react'


class Cart extends Component {
    render() {
        return (
            <>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Cart</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                </IonContent>
            </>
        );
    }
}

export default Cart;