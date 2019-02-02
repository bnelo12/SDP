import React, {Component} from 'react';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react'


class Login extends Component {
    render() {
        return (
            <div id='login-page'>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot='start'>
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Login</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </div>
        );
    }
}

export default Login;