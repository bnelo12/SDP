import React, { Component } from 'react';
import {IonHeader, IonToolbar, IonMenuButton, IonButtons, IonTitle, IonContent, IonFooter, IonButton, IonItem, IonList } from '@ionic/react';

import CartItem from '../../components/CartItem'; 
import EmptyCart from '../../components/EmptyCart';

class Cart extends Component {

    render() {

        const { items, haveReceived } = this.props.cart;
        const { email } = this.props;

        const renderItems = Object.keys(items).map((key) => (
            <CartItem
                key={ key } 
                id={ key } 
                itemName={ items[key].name } 
                count={ items[key].count } 
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
                            <IonButton class='custom' color='secondary'>Collect</IonButton>
                        </IonItem>
                    </IonToolbar>
                </IonFooter>
            </>
        );
    }
}

export default Cart;