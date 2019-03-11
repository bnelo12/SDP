import React from 'react';
import { IonIcon, IonInput, IonItem, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';

import './SignUpForm.scss'

const SignUpForm = (props) => {
    const onSubmit = onSubmitFn => event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm_password = event.target.confirm_password.value;
        if (password === confirm_password) {
            onSubmitFn(email, password);
        } else {
            props.toastManager.add("Passwords do not match", {appearance: "error", autoDismiss: true, autoDismissTimeout: 5000});
        }
    }

    return (
        <div id="sign-up-form-content">
            <IonCard>
                <IonCardHeader>
                    <IonItem>
                        <IonCardTitle>Create Account</IonCardTitle>
                        <IonButton slot="end" id="return" onClick={(ev) => {ev.stopPropagation(); props.onReturn()}} fill="clear">
                            <IonIcon name='close'/>
                        </IonButton>
                    </IonItem>
                </IonCardHeader>
                <IonCardContent>
                    <form onSubmit={onSubmit(props.onSubmit)}>
                        <div className="text-box top">
                            <IonItem>
                                <IonInput
                                    placeholder="Email"
                                    name="email"
                                    type="text"
                                    autocapitalize="off"
                                    required
                                />
                            </IonItem>
                        </div>
                        <div className="text-box">
                            <IonItem>
                                <IonInput placeholder="Password" name="password" type="password" required/>
                            </IonItem>
                        </div>
                        <div className="text-box bottom">
                            <IonItem>
                                <IonInput placeholder="Confirm Password" name="confirm_password" type="password" required/>
                            </IonItem>
                        </div>
                        <IonButton class="custom" type='submit' color="success">
                            Create Account
                        </IonButton>
                    </form>
                </IonCardContent>
            </IonCard>
        </div>
    );
}

export default SignUpForm;