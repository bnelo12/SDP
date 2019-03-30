import React from 'react';
import { IonButton } from '@ionic/react';

import Loading from './Loading';
import Check from './Check';

import "./Queue.scss";
import { unsubscribeToBrowseItemsData } from '../store/browseItems/actions';

export default ({queue, items, cartItems, submitOrder, email, onCancelOrder, closeQueue}) => {

    const getClass = () => {
        if (queue.shouldShowQueue) return "opening";
        else if (queue.wasOpen) return "closing";
        else return "";
    }

    const makeOrder = () => {
        console.log(cartItems, items)
        var order = [];
        var userOrder = [];
        for (let item of Object.keys(cartItems)) {
            for (let i = 0; i < cartItems[item].count; i++) {
                order.push(items[item][i]);
                userOrder.push({item, position: items[item][i]})
            }
        }
        return {items: order, user: email, updateItems: items, userOrder};
    }

    const inQueueRender = () => (
        <>
            <Loading/>
            <IonButton 
                onClick={(ev) => {ev.stopPropagation(); onCancelOrder();}} id="cancel-order-button" fill="clear">
                cancel order
            </IonButton>
        </>
    )

    const readyRender = () => (
        <>
            <Check play={queue.queue.users && queue.queue.users[0] === email}/>
            <IonButton 
                onClick={(ev) => {ev.stopPropagation(); submitOrder(makeOrder()); onCancelOrder();}} id="collect-order-button" fill="outline" color="secondary">
                collect now
            </IonButton>
        </>
    )

    return (
        <div id="queue" className={getClass()}>
            <div id="content">
                {queue.queue.users && queue.queue.users[0] === email ? readyRender() : inQueueRender()}
            </div>
        </div>
    )
}