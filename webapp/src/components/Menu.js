import React from 'react';
import { IonMenu, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const Menu = () => {
    return (
        <IonMenu contentId='main'>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonMenu>
    );
}

export default Menu;