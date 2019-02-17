import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { IonToast } from '@ionic/react'

import firebase from "firebase/app";
import "firebase/auth";

import SignInForm from '../components/SignInForm'

import './Login.scss'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shouldShowInvalidLoginToast: false
        }
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) this.props.history.replace('/home');
        });
        this.login = this.login.bind(this);
    }

    login(email, password) {
        console.log(`Signing In ${email}`)
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userRecord) => {
            console.log("Successfully fetched user data:", email);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
            this.setState({shouldShowInvalidLoginToast: true});
        });
    }

    render() {
        return (
            <div id='login-page'>
                <div id='background-image'/>
                <div id='sign-in-form'>
                    <IonToast
                        show={this.state.shouldShowInvalidLoginToast}
                        color="danger"
                        position="middle"
                        message="Invalid login credentials"
                        showCloseButton={false}
                        duration={1500}
                        onIonToastDidDismiss={() => this.setState(() => ({ shouldShowInvalidLoginToast: false }))}
                    />
                    <SignInForm onSubmit={this.login}/>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);