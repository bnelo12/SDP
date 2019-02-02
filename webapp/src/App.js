import React, { Component } from 'react';
import { IonButton, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle} from '@ionic/react';


class App extends Component {
  render() {
    return (
        <>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Signup</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonButton>Create</IonButton>
        </IonContent>
      </>
    );
  }
}

export default App;
