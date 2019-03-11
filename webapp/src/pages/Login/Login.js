import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';

import SignInForm from '../../components/SignInForm'
import SignUpForm from '../../components/SignUpForm'

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
        const { toastManager } = this.props;
        if (!this.props.user.authStatusIsKnown || this.props.user.isAuthenticated) {
            return null;
        } else {        
            return (
                <div id='login-page'>
                    <div id='background-image'/>
                    <ReactCardFlip isFlipped={this.props.user.createAccountShouldShow}>
                        <div id='sign-in-form' key="front">
                            <SignInForm 
                                onSubmit={this.props.userDispatch.login}
                                onSignInWithFacebook={signInWithFacebook}
                                onSignInWithGoogle={signInWithGoogle}
                                onCreateAccount={this.props.userDispatch.showCreateAccount}
                            />
                        </div>
                        <div id='sign-up-form' key="back">
                            <SignUpForm
                                onReturn={this.props.userDispatch.hideCreateAccount}
                                onSubmit={this.props.userDispatch.signUp}
                                toastManager={toastManager}
                            />
                        </div>
                    </ReactCardFlip>
                </div>
            );
        }
    }
}

export default Login;