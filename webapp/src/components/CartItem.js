import React from 'react';
import { IonItem, IonLabel, IonButton, IonIcon } from '@ionic/react';

export default ({ id, itemName, count }) => (
    <IonItem>
        <IonLabel>
            <h2>{ itemName }</h2>
            <h4>Quantity: x{ count }</h4>
            <p>{ id }</p>
        </IonLabel>
        <div slot='end'>
            { 
                count > 1 ? (
                    <IonButton title="Remove One" shape="round" fill="none" size="large">
                        <IonIcon name="remove" color="dark"/>
                    </IonButton>
                ) : null
            }
            <IonButton title='Remove All' shape="round" fill="none" size="large">
                <IonIcon name="close" color="dark"/>
            </IonButton>
        </div>
    </IonItem>
)