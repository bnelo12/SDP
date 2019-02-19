import React, {Component} from 'react';
import { IonToast } from '@ionic/react'

import SignInForm from '../../components/SignInForm'

import './Login.scss'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shouldShowInvalidLoginToast: false
        }
    }

    
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
                            show={this.state.shouldShowInvalidLoginToast}
                            color="danger"
                            position="middle"
                            message="Invalid login credentials"
                            showCloseButton={false}
                            duration={1500}
                            onIonToastDidDismiss={() => this.setState(() => ({ shouldShowInvalidLoginToast: false }))}
                        />
                        <SignInForm onSubmit={this.props.userDispatch.login}/>
                    </div>
                </div>
            );
        }
    }
}

export default Login;