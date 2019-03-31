import React, { Component } from 'react';
import {IonHeader, IonToolbar, IonMenuButton, IonButtons, IonTitle, IonContent, IonList } from '@ionic/react'

import ReturnOrder from '../../components/ReturnOrder';

class Return extends Component {
    render() {
        const {orders, browseItems, email, addUserToQueue} = this.props;        
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
                    <IonList>
                        {orders.map((order, idx) => (<ReturnOrder key={order.date} browseItems={browseItems} order={order} onReturn={
                            () => { addUserToQueue(email); }
                        }/>))}
                    </IonList>
                </IonContent>
            </>
        );
    }
}

export default Return;