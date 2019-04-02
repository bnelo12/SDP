import React from 'react';
import { IonButton } from '@ionic/react';

import Gears from './Gears';

import './CollectSteps.scss';

export default ({ orders, collect, submitCollect, finishCollect, toastManager }) => {
    const collectOrder = orders.orders[orders.orders.length - 1];
    const collectStep = collect.collectStep;
    const itemsToCollect = Object.values(collectOrder.items);
    if (collectStep < itemsToCollect.length) {
        return (
            <div id="collect-steps">
                <div id="collect-instructions">
                    <h1>Collecting item {`${collectStep + 1}/${itemsToCollect.length}`}</h1>
                        {!orders.robotStatus ? (
                            <>
                                <h3>Please Wait</h3>
                                <Gears/>
                                <h1>The Robot is Collecting Your Item</h1>
                            </>
                            ) : (
                            <>
                                <h3>Item Delivered</h3>
                                <p>Please collect the item and then press continue to fetch the next item.</p>
                                <IonButton 
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        submitCollect(collectStep + 1 === itemsToCollect, false, Number(Object.keys(collectOrder.items)[collectStep]));
                                    }} id="continue-button" fill="outline" color="secondary">
                                    continue
                                </IonButton>
                            </>
                        )}
                </div>
            </div>
        );
    } else {
        finishCollect();
        toastManager.add("Your items have been succesfully collected!", {appearance: "success", autoDismiss: false})
        return null;
    }
}