import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import firebase from "firebase/app";
import "firebase/auth";

class SplashScreen extends Component {

    constructor(props) {
        super(props);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) this.props.history.push('/home');
            else this.props.history.push('/login');
        });
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default withRouter(SplashScreen);