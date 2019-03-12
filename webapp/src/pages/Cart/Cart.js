import React, { Component } from 'react';
import {IonHeader, IonToolbar, IonMenuButton, IonButtons, IonTitle, IonContent, IonFooter, IonButton, IonItem, IonList } from '@ionic/react';

import CartItem from '../../components/CartItem'; 
import EmptyCart from '../../components/EmptyCart';

class Cart extends Component {

    render() {

        const { items, haveReceived, isWritingData } = this.props.cart;
        const { email, toastManager } = this.props;
        const { addUserToQueue } = this.props;

        const renderItems = Object.keys(items).sort().map((key) => (
            <CartItem
                key={ key } 
                id={ key } 
                itemName={ items[key].name } 
                count={ items[key].count }
                canRemove={!isWritingData}
                toastManager={toastManager}
                onRemove={ (id, count) => this.props.removeItemFromCart(id, count, email) }
                onRemoveSingle={ (id) => this.props.removeOneFromCart(id, email) }
                />
        ));

        const content = () => {
            if (!haveReceived) return null;
            if (Object.keys(items).length === 0) return (
                <EmptyCart/>
            )
            else return (
                <IonList>
                    { renderItems }
                </IonList>
            )
        }

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
                    { content() }
                </IonContent>
                <IonFooter>
                    <IonToolbar>
                        <IonItem slot="end">
                            {
                                renderItems.length > 0 ? (
                                    <IonButton onClick={(ev) => { ev.stopPropagation(); addUserToQueue(email); }} class='custom' color='primary'>Collect</IonButton>
                                ) : null 
                            }
                        </IonItem>
                    </IonToolbar>
                </IonFooter>
            </>
        );
    }
}

export default Cart;