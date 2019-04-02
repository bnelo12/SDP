import React from 'react';
import {IonCard, IonCardSubtitle, IonButton} from '@ionic/react';

import Gears from './Gears';

import './ReturnSteps.scss'

export default ({ browseItems, orders, returnItems, items, submitReturn, finishReturn, email, toastManager }) => {
    const returnOrder = orders.orders[returnItems.returnNumber];
    const returnStep = returnItems.returnStep;
    const itemsToReturn = Object.values(returnOrder.items); 
    const currentItem = browseItems.items[itemsToReturn[returnStep]];
    if (returnStep < itemsToReturn.length) {
        return (
            <div id="return-steps">
                <div id="return-instructions">
                    <h1>Returning item {`${returnStep + 1}/${itemsToReturn.length}`}</h1>
                        {!orders.robotStatus ? (
                            <>
                                <h3>Please Wait</h3>
                                <Gears/>
                                <h1>The Robot is Returning Your Item</h1>
                            </>
                            ) : (
                            <>
                                <h3>Please place the following item in the collection zone</h3>
                                <IonCard>
                                    <img alt={ currentItem.name } src={ currentItem.imageURL }/>
                                    <IonCardSubtitle>{ currentItem.name }</IonCardSubtitle>
                                </IonCard>
                                <p>Please place the above item in the collection zone. The collection zone is marked with a white 'X'. Press continue when the item is placed.</p>
                                <IonButton 
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        submitReturn(returnStep + 1 === itemsToReturn, false, Number(Object.keys(returnOrder.items)[returnStep]));
                                    }} id="continue-button" fill="outline" color="secondary">
                                    continue
                                </IonButton>
                            </>
                        )}
                </div>
            </div>
        );
    } else {
        finishReturn(returnItems.returnNumber, itemsToReturn, email, orders.orders, items);
        toastManager.add("Your items have been succesfully returned. Thank you for using the Retriva rental solution!", {appearance: "success", autoDismiss: false})
        return null;
    }
}