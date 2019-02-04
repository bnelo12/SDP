import React, {Component} from 'react';

import SignInForm from '../components/SignInForm'

import './Login.scss'

class Login extends Component {
    render() {
        return (
            <div id='login-page'>
                <div id='background-image'/>
                <div id='sign-in-form'>
                    <SignInForm/>
                </div>
            </div>
        );
    }
}

export default Login;