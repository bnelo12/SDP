import React, { Component } from 'react';
import {IonHeader, IonToolbar, IonMenuButton, IonButtons, IonButton, IonItem, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonFooter, IonToast } from '@ionic/react'

import Item from '../../components/Item';

class Browse extends Component {
    render() {
        const { items, handleBrowseItemClicked, isWritingData } = this.props;

        const handleItemClick = (key) => {
            if (!isWritingData && items[key].count !== 0) {
                handleBrowseItemClicked(key, items[key], this.props.user);
                this.props.showAddedToCartToast(`Adding ${items[key].name} to cart.`)                
            }
        }

        const renderItems = Object.keys(items).sort().map((key) => (
            <IonCol key={key} size="4">
                <Item id={key} image_url={items[key].imageURL} name={items[key].name} quantity={items[key].count} onClick={() => handleItemClick(key)}/>
            </IonCol>
        ));

        return (
            <>
                <IonToast
                    show={this.props.addedToCartToast.shouldShowToast}
                    color="primary"
                    position="top"
                    message={this.props.addedToCartToast.message}
                    showCloseButton={false}
                    duration={1000}
                    onIonToastDidDismiss={this.props.addedToCartToast.onToastDidDismissCallback}
                />
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