import React, {Component} from 'react';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';

import SignInForm from '../components/SignInForm'

class Login extends Component {
    render() {
        return (
            <div id='login-page'>
                <SignInForm/>
            </div>
        );
    }
}

export default Login;