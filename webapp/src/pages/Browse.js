import React, { Component } from 'react';
import {IonHeader, IonToolbar, IonMenuButton, IonButtons, IonTitle, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react'

import Item from '../components/Item';

class Browse extends Component {
    render() {
        return (
            <>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Browse Items</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="4">
                                <Item image_url="https://media.rs-online.com/t_large/F8111284-01.jpg" name="Raspberry Pi" quantity={3}/>
                            </IonCol>
                            <IonCol size="4">
                                <Item image_url="https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/520x330/604a3538c15e081937dbfbd20aa60aad/a/0/a000066_featured_4.jpg" name="Arduino Uno Rev 3" quantity={2}/>
                            </IonCol>
                            <IonCol size="4">
                                <Item image_url="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5989/5989502_rd.jpg" name="Oculus Rift" quantity={1}/>
                            </IonCol>
                            <IonCol size="4">
                                <Item image_url="https://images-na.ssl-images-amazon.com/images/I/71PeyEiixuL._SY355_.jpg" name="Electonics Kit" quantity={10}/>
                            </IonCol>
                            <IonCol size="4">
                                <Item image_url="https://target.scene7.com/is/image/Target/GUEST_04fe236a-1762-4120-a259-2e41246996ef?wid=488&hei=488&fmt=pjpeg" name="Amazon Echo Dot" quantity={6}/>
                            </IonCol>
                            <IonCol size="4">
                                <Item image_url="https://le-www-live-s.legocdn.com/images/423923/live/sc/Products/5003400/5003400_1050x1050_1_xx-xx/63feb014132ef703a7e6d2c600b1d52d/2d9e36d3-afaf-4203-aa23-a58d00d7ca07/original/2d9e36d3-afaf-4203-aa23-a58d00d7ca07.jpg?fit=inside|855:640" name="Lego Mindstorm Kit" quantity={2}/>
                            </IonCol>
                            <IonCol size="4">
                                <Item image_url="https://cdn-images-1.medium.com/max/1600/1*F9tk3TcoO7ZgTqi29IMt4g.jpeg" name="Leap Motion" quantity={2}/>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </>
        );
    }
}

export default Browse;