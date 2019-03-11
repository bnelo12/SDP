import React from 'react';
import { IonButton } from '@ionic/react';

import Loading from './Loading';

import "./Queue.scss";

export default ({queue, onCancelOrder}) => {

    const getClass = () => {
        if (queue.shouldShowQueue) return "opening";
        else if (queue.wasOpen) return "closing";
        else return "";
    }

    return (
        <div id="queue" className={getClass()}>
            <div id="content">
                <Loading/>
                <IonButton 
                    onClick={(ev) => {ev.stopPropagation(); onCancelOrder();}} id="cancel-order-button" fill="clear" slot="icon-only">
                    cancel order
                </IonButton>
            </div>
        </div>
    )
}