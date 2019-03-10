import React, {Component} from 'react';

import firebase from "firebase/app";
import "firebase/auth";

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
        if (this.props.user.addInvalidLoginToast) {
            this.props.userDispatch.finishedAddingInvalidLoginToast()
            const { toastManager } = this.props;
            const { invalidLoginToastMessage } = this.props.user;
            toastManager.add(invalidLoginToastMessage, {appearance: "error", autoDismiss: true, autoDismissTimeout: 5000});
        }
    }

    render() {
        const { toastManager } = this.props;        

        const signInWithFacebook = () => {
            var provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {
                var token = result.credential.accessToken;
                var user = result.user;
            }).catch(function(error) {
                var errorMessage = error.message;
                toastManager.add(errorMessage, {appearance: "error", autoDismiss: true, autoDismissTimeout: 5000});
            });         
        }

        if (!this.props.user.authStatusIsKnown || this.props.user.isAuthenticated) {
            return null;
        } else {        
            return (
                <div id='login-page'>
                    <div id='background-image'/>
                    <div id='sign-in-form'>
                        <SignInForm onSubmit={this.props.userDispatch.login} onSignInWithFacebook={signInWithFacebook} />
                    </div>
                </div>
            );
        }
    }
}

export default Login;