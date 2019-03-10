import React, { Component } from 'react';
import {IonHeader, IonToolbar, IonMenuButton, IonButtons, IonButton, IonItem, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonFooter } from '@ionic/react'

import Item from '../../components/Item';

class Browse extends Component {
    render() {
        const { items, handleBrowseItemClicked, isWritingData, toastManager } = this.props;

        const handleItemClick = (key) => {
            if (!isWritingData && items[key].count !== 0) {
                handleBrowseItemClicked(key, items[key], this.props.user);
                toastManager.add(`Added ${items[key].name} to cart.`, {appearance: "success", autoDismiss: true, autoDismissTimeout: 3000})                
            }
        }

        const renderItems = Object.keys(items).sort().map((key) => (
            <IonCol key={key} size="4">
                <Item id={key} image_url={items[key].imageURL} name={items[key].name} quantity={items[key].count} onClick={() => handleItemClick(key)}/>
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
                            <IonButton class='custom' color='secondary' onClick={() => this.props.history.push('/home/cart')}>View Cart</IonButton>
                        </IonItem>
                    </IonToolbar>
                </IonFooter>
            </>
        );
    }
}

export default Browse;