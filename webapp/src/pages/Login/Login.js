import React, {Component} from 'react';

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
        const { signInWithFacebook, signInWithGoogle } = this.props.userDispatch;
        if (!this.props.user.authStatusIsKnown || this.props.user.isAuthenticated) {
            return null;
        } else {        
            return (
                <div id='login-page'>
                    <div id='background-image'/>
                    <div id='sign-in-form'>
                        <SignInForm onSubmit={this.props.userDispatch.login} onSignInWithFacebook={signInWithFacebook} onSignInWithGoogle={signInWithGoogle} />
                    </div>
                </div>
            );
        }
    }
}

export default Login;