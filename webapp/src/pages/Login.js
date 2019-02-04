import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import firebase from "firebase/app";
import "firebase/auth";

import SignInForm from '../components/SignInForm'

import './Login.scss'

class Login extends Component {

    constructor(props) {
        super(props);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) this.props.history.push('/home');
        });
    }

    login(email, password) {
        console.log(`Signing In ${email}`)
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(userRecord) {
            console.log("Successfully fetched user data:", email);
        })
        .catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });
    }

    render() {
        return (
            <div id='login-page'>
                <div id='background-image'/>
                <div id='sign-in-form'>
                    <SignInForm onSubmit={this.login}/>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);