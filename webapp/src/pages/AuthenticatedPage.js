import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login, subscribeOnAuthStateChanged, unsubscribeOnAuthStateChanged } from '../store/user/actions';


const authenticatedPage = (ComposedComponent) => {

    const mapStateToProps = state => {
        return { 
            user: state.user    
        };
    }
    
    const mapDispatchToProps = dispatch => {
        return {
            userDispatch: {
                login: function(username, password) {
                    dispatch(login(username, password));
                },
                subscribeOnAuthStateChanged: function() {
                    dispatch(subscribeOnAuthStateChanged());
                },
                unsubscribeOnAuthStateChanged: function(unsubscribe) {
                    dispatch(unsubscribeOnAuthStateChanged(unsubscribe));
                }
            }
        }
    }

    class AuthenticatedPage extends Component {

        componentDidMount() {
            this.props.userDispatch.subscribeOnAuthStateChanged();                        
        }

        componentWillUnmount() {
            this.props.userDispatch.unsubscribeOnAuthStateChanged(this.props.user.authChangedListener);
        }

        componentDidUpdate() {
            if (this.props.user.authStatusIsKnown && !this.props.user.isAuthenticated) {
                this.props.history.replace('/login');
            }
        }
    
        render() {
            if (!this.props.user.authStatusIsKnown || !this.props.user.isAuthenticated) {
                return null;
            } else {    
                return (
                    <div className='authenticated-page'>
                        <ComposedComponent/>
                    </div>
                );
            }
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthenticatedPage));;
};

export default authenticatedPage;