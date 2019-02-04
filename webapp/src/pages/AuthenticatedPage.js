import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import firebase from "firebase/app";
import "firebase/auth";


const AuthenticatedPage = (ComposedComponent) => {
    class AuthenticatedPage extends Component {
        constructor(props) {
            super(props);
            this.state = { authStateChanged: false, user: null };
        }

        componentWillMount() {
            firebase.auth().onAuthStateChanged((user) => {
                if (!user) this.props.history.replace('/login');
                else this.setState({ authStateChanged: true, user: user });
            });
        }
    
        render() {
            return (
                <div className='authenticated-page'>
                    {this.state.authStateChanged && this.state.user !== null ?
                        (<ComposedComponent user={this.state.user}/>) : null }
                </div>
            );
        }
    }
    return withRouter(AuthenticatedPage);
};

export {AuthenticatedPage};