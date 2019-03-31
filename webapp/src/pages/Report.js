import React, { Component } from 'react';
import {IonHeader, IonToolbar, IonMenuButton, IonButton, IonButtons, IonTitle, IonItem, IonInput, IonContent } from '@ionic/react'

//import './Report.scss'

class Report extends Component {
    render() {
        return (
            <>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Report Issue</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent id='report-page'>
                    <form id="report-form-content">
                        <div className="text-box top">
                            <IonItem>
                                <IonInput placeholder="Description" name="description" type="text" required/>
                            </IonItem>
                        </div>
                        <div className="text-box bottom">
                            <IonItem>
                                <IonInput
                                    placeholder="Email"
                                    name="email"
                                    type="text"
                                    autoCapitalize="off"
                                    required
                                />
                            </IonItem>
                        </div>
                        <IonButton class="custom" type='submit' color="success">
                            Submit Issue
                        </IonButton>
                    </form>
                </IonContent>
            </>
        )
    }
}

export default Report;