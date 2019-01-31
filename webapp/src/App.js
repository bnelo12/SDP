import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { IonButton, IonBody, IonContent} from 'reactionic';


class App extends Component {
  render() {
    return (
        <IonBody location={this.props.location} >
            <IonContent>
        <IonButton  icon="ion-chevron-right"
            iconPosition="right"
            link="/next/page"
            color="secondary"
            type="outline"
>Forward</IonButton>
            </IonContent>
        </IonBody>
    );
  }
}

export default App;
