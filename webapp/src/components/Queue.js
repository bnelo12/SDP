import React from 'react';
import { IonButton } from '@ionic/react';

import Loading from './Loading';
import Check from './Check';

import "./Queue.scss";

export default ({queue, email, onCancelOrder}) => {

    const getClass = () => {
        if (queue.shouldShowQueue) return "opening";
        else if (queue.wasOpen) return "closing";
        else return "";
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
                onClick={(ev) => {ev.stopPropagation(); onCancelOrder();}} id="collect-order-button" fill="outline" color="secondary">
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