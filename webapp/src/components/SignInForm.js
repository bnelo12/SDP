import React from 'react';
import { IonIcon, IonInput, IonLabel, IonItem, IonButton, IonCard, IonCardContent } from '@ionic/react';

import './SignInForm.scss'

const SignInForm = (props) => {

    const onSubmit = onSubmitFn => event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        onSubmitFn(email, password);
    }

    return (
        <div id="sign-in-form-content">
            <IonCard>
                <IonCardContent>
                    <form onSubmit={onSubmit(props.onSubmit)}>
                        <div className="text-box">
                            <IonItem>
                                <IonLabel color="primary">Email</IonLabel>
                                <IonInput
                                    name="email"
                                    type="text"
                                    autocapitalize="off"
                                    required
                                />
                            </IonItem>
                        </div>
                        <div className="text-box">
                            <IonItem>
                                <IonLabel color="primary">Password</IonLabel>
                                <IonInput name="password" type="password" required/>
                            </IonItem>
                        </div>
                        <IonButton type='submit' color="primary">
                            Sign In
                        </IonButton>
                    </form>
                    <p>Or sign in with one of these</p>
                    <a href='/'>
                        <IonIcon name='logo-facebook'/>
                    </a>
                    <a href='/'>
                        <IonIcon name='logo-google'/>
                    </a>
                    <div className='create-account-link'>
                        <a href='/'>create account</a>
                    </div>
                </IonCardContent>
            </IonCard>
        </div>
    );
}

export default SignInForm;