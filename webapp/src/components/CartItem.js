import React from 'react';
import { IonItem, IonLabel, IonButton, IonIcon } from '@ionic/react';

export default ({ id, itemName, count, onRemove, onRemoveSingle, canRemove, toastManager }) => (
    <IonItem>
        <IonLabel>
            <h2>{ itemName }</h2>
            <h4>Quantity: x{ count }</h4>
            <p>{ id }</p>
        </IonLabel>
        <div slot='end'>
            { 
                count > 1 ? (
                    <IonButton title="Remove One" shape="round" fill="none" size="large" onClick={ (ev) => {
                        ev.stopPropagation();
                        if (canRemove) {
                            toastManager.add(`Removed 1 ${itemName} from cart.`, {appearance: "warning", autoDismiss: true, autoDismissTimeout: 3000});  
                            onRemoveSingle(id, 1);
                        }
                    } }>
                        <IonIcon name="remove" color="dark"/>
                    </IonButton>
                ) : null
            }
            <IonButton title='Remove All' shape="round" fill="none" size="large" onClick={ (ev) => {
                    ev.stopPropagation();
                    if (canRemove) {
                        toastManager.add(`Removed ${count} ${count > 1 ? itemName + "s" : itemName} from cart.`, {appearance: "warning", autoDismiss: true, autoDismissTimeout: 3000});  
                        onRemove(id, count)
                    }
                }}>
                <IonIcon name="close" color="dark"/>
            </IonButton>
        </div>
    </IonItem>
)