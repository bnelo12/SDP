import React, { Component } from 'react';
import {IonHeader, IonToolbar, IonMenuButton, IonButton, IonButtons, IonTitle, IonCard, IonCardTitle, IonCardContent } from '@ionic/react'

import firebase from "firebase/app";
import "firebase/auth";

import './Logout.scss'


class Logout extends Component {

    logout() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <div id='logout-page'>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Logout</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonCard>
                    <IonCardTitle>Are you sure you want to logout?</IonCardTitle>
                    <IonCardContent>
                        <IonButton color='danger' onClick={this.logout}>Logout</IonButton>
                    </IonCardContent>
                </IonCard>
            </div>
        );
    }
}

export default Logout;