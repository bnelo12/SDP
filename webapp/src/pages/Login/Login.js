import React, {Component} from 'react';
import { IonToast } from '@ionic/react'

import SignInForm from '../../components/SignInForm'

import './Login.scss'

class Login extends Component {
    
    componentDidMount() {
        this.props.userDispatch.subscribeOnAuthStateChanged();                        
    }

    componentWillUnmount() {
        this.props.userDispatch.unsubscribeOnAuthStateChanged(this.props.user.authChangedListener);
    }

    componentDidUpdate() {
        if (this.props.user.isAuthenticated) {
            this.props.history.replace('/home');
        }
    }

    render() {
        if (!this.props.user.authStatusIsKnown || this.props.user.isAuthenticated) {
            return null;
        } else {        
            return (
                <div id='login-page'>
                    <div id='background-image'/>
                    <div id='sign-in-form'>
                        <IonToast
                            show={this.props.invalidLoginToast.shouldShow}
                            color="danger"
                            position="middle"
                            message={this.props.invalidLoginToast.message}
                            showCloseButton={false}
                            duration={1500}
                            onIonToastDidDismiss={this.props.invalidLoginToast.onDismissCallback}
                        />
                        <SignInForm onSubmit={this.props.userDispatch.login}/>
                    </div>
                </div>
            );
        }
    }
}

export default Login;