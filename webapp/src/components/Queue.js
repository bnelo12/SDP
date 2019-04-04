import React from 'react';
import { IonButton } from '@ionic/react';

import Loading from './Loading';
import Check from './Check';

import "./Queue.scss";

export default ({queue, items, cartItems, submitOrder, email, onCancelOrder, beginCollect, isReturn, beginReturn}) => {

    const getClass = () => {
        if (queue.shouldShowQueue) return "opening";
        else if (queue.wasOpen) return "closing";
        else return "";
    }

    const makeAndSubmitOrder = () => {
        submitOrder({items, cartItems, email});
    }

    const inQueueRender = () => (
        <>
            <Loading isReturn={isReturn}/>
            {
                queue.queue.users ?
                    queue.queue.users.findIndex(user => user === email) === 1 ?
                        (<h4>You are next in the queue! Head over to the Retiva system!</h4>) :
                        (<h4>There are  {queue.queue.users.findIndex(user => user === email)} users ahead of you</h4>)
                    : null
            }

            <IonButton 
                onClick={(ev) => {
                    ev.stopPropagation();
                    onCancelOrder();
                }} id="cancel-order-button" fill="clear">
                {isReturn ? "cancel return" : "cancel order"}
            </IonButton>
        </>
    )

    const readyRender = () => (
        <>
            <Check play={queue.queue.users && queue.queue.users[0] === email} isReturn={isReturn}/>
            <IonButton 
                onClick={(ev) => {
                    ev.stopPropagation();
                    if (isReturn) beginReturn();
                    else {
                        makeAndSubmitOrder();
                    }
                }} id="collect-order-button" fill="outline" color="secondary">
                {isReturn ? "return my items now" : "collect now"}
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