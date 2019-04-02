import React, { Component } from 'react';
import {IonHeader, IonToolbar, IonMenuButton, IonButtons, IonButton, IonFooter, IonTitle, IonItem, IonInput, IonContent, IonTextarea } from '@ionic/react'

import './Report.scss'
import { withRouter } from 'react-router-dom';
import { withToastManager } from 'react-toast-notifications/dist/ToastProvider';

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
                                <IonTextarea placeholder="Description" name="description" rows="5" required/>
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
                    </form>
                </IonContent>
                <IonFooter>
                    <IonToolbar>
                        <IonItem slot="end">
                            <IonButton class='custom' type='submit' color='secondary' onClick={
                                (event) => {
                                    event.stopPropagation();
                                    this.props.toastManager.add("Your report has been logged.", {appearance: "success", autoDismiss: true, autoDismissTimeout: 5000});
                                    this.props.history.replace("/browse");
                                }
                            }>Submit Issue</IonButton>
                        </IonItem>
                    </IonToolbar>
                </IonFooter>
            </>
        )
    }
}

export default withRouter(withToastManager(Report));