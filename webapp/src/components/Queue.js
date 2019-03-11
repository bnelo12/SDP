import React from 'react';
import { IonButton } from '@ionic/react';

import Loading from './Loading';

import "./Queue.scss";

export default ({show}) => {
    return (
        <div id="queue" className={show ? "opening" : ""}>
            <div id="content">
                <Loading/>
                <IonButton id="cancel-order-button" fill="clear" slot="icon-only">
                    cancel order
                </IonButton>
            </div>
        </div>
    )
}