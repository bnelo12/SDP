import React from 'react';
import { IonItem, IonLabel, IonButton, IonIcon, IonListHeader, IonAvatar } from '@ionic/react';

import './ReturnOrder.scss';

export default ({order, browseItems, onReturn}) => {
    const groupedOrder = {};
    for (const item of Object.values(order.items)) {
        if (groupedOrder[item] === undefined) groupedOrder[item] = 1;
        else groupedOrder[item]++;
    }
    return (
        <>
            <IonListHeader>
                {order.date}
            </IonListHeader>
            <>
                {
                    Object.keys(groupedOrder).map((item, idx) => (
                        <IonItem key={idx}>
                            <IonAvatar slot="start">
                                <img src={browseItems[item].imageURL}/>
                            </IonAvatar>
                            <IonLabel>
                                <h2>{ browseItems[item].name }</h2>
                                <h4>Quantity: x{ groupedOrder[item] }</h4>
                                <p>{ item }</p>
                            </IonLabel>
                        </IonItem>
                ))}
            </>
            <IonItem lines="none">
                <IonButton
                    onClick={(ev) => {ev.stopPropagation(); onReturn();}}
                    slot="end"
                    class="return-order-button" fill="outline" color="secondary">
                    return now
                </IonButton>
            </IonItem>
        </>
    );
}