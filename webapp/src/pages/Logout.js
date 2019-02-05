import React, { Component } from 'react';
import {IonHeader, IonToolbar, IonMenuButton, IonButton, IonButtons, IonTitle, IonCard, IonCardTitle, IonCardContent, IonContent } from '@ionic/react'

import firebase from "firebase/app";
import "firebase/auth";

import './Logout.scss'


class Logout extends Component {

    logout() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Logout</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent id='logout-page'>
                    <IonCard>
                        <IonCardTitle>Are you sure you want to logout?</IonCardTitle>
                        <IonCardContent>
                            <IonButton color='danger' onClick={this.logout}>Logout</IonButton>
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </>
        );
    }
}

export default Logout;