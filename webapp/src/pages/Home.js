import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import { IonApp, IonSplitPane } from '@ionic/react';

import firebase from "firebase/app";
import "firebase/auth";

import Menu from '../components/Menu'

class Home extends Component {

    constructor(props) {
        super(props);
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) this.props.history.push('/login');
        });
    }

    render() {
        return (
            <IonApp>
                <IonSplitPane contentId='main'>
                    <Menu/>
                    <div id='main' className='ion-page'>
                        Hello
                    </div>
                </IonSplitPane>
            </IonApp>
        );
    }
}

export default withRouter(Home);