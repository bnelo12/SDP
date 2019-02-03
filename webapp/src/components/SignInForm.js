import React from 'react';
import { IonList, IonInput, IonLabel, IonRow, IonCol, IonItem, IonButton, IonCard, IonCardContent, IonCardTitle } from '@ionic/react';


const SignInForm = (props) => {
    return (
        <IonCard>
            <IonCardTitle>Sign In</IonCardTitle>
            <IonCardContent>
                <form noValidate>
                    <IonList no-lines>
                        <IonItem>
                            <IonLabel color="primary">Username</IonLabel>
                            <IonInput
                                name="username"
                                type="text"
                                autocapitalize="off"
                                required
                            />
                        </IonItem>
                        <IonItem>
                            <IonLabel color="primary">Password</IonLabel>
                            <IonInput name="password" type="password" required/>
                        </IonItem>
                    </IonList>
                    <IonRow responsive-sm>
                        <IonCol>
                            <IonButton onClick="">
                                Login
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton onClick="" color="light">
                                Signup
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </form>
            </IonCardContent>
        </IonCard>
    );
}

export default SignInForm;