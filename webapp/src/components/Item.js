import React from 'react';
import {IonCard, IonCardSubtitle} from '@ionic/react';

import './Item.scss';

const Item = ({ image_url, name, quantity, onClick }) => (
    <div className='item' onClick={() => {
        if (quantity !== 0) {
            onClick();
        }
    }}>
        <IonCard>
            {quantity !== 0 ? 
                (<div className='count-bubble'>{quantity} available</div>) :
                (<div className='count-bubble out'>out of stock</div>) 
            }
            <img alt={ name } src={ image_url }/>
            <IonCardSubtitle>{ name }</IonCardSubtitle>
        </IonCard>
    </div>
);

export default Item;