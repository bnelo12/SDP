import React, { Component } from 'react';
import {IonHeader, IonToolbar, IonMenuButton, IonButtons, IonButton, IonItem, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonFooter } from '@ionic/react'

import Item from '../../components/Item';

class Browse extends Component {
    render() {
        const { items } = this.props;

        const renderItems = Object.keys(items).map((key) => (
            <IonCol key={key} size="4">
                <Item id={key} image_url={items[key].imageURL} name={items[key].name} quantity={items[key].count}/>
            </IonCol>
        ));

        return (
            <>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Browse Items</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        <IonRow>
                            { renderItems }
                        </IonRow>
                    </IonGrid>
                </IonContent>
                <IonFooter>
                    <IonToolbar>
                        <IonItem slot="end">
                            <IonButton color='primary'>Collect</IonButton>
                        </IonItem>
                    </IonToolbar>
                </IonFooter>
            </>
        );
    }
}

export default Browse;