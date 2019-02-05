import React, { Component } from 'react';
import {IonHeader, IonToolbar, IonMenuButton, IonButtons, IonTitle, IonContent } from '@ionic/react'

import Item from '../components/Item';

class Browse extends Component {
    render() {
        return (
            <div>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Browse Items</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <Item image_url="https://media.rs-online.com/t_large/F8111284-01.jpg" name="Raspberry Pi"/>
            </div>
        );
    }
}

export default Browse;