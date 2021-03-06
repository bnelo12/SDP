import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withToastManager } from 'react-toast-notifications';

import { C, login, subscribeOnAuthStateChanged, unsubscribeOnAuthStateChanged, signInWithFacebook, signInWithGoogle, signUp } from '../../store/user/actions';

import Login from './Login';


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
            },
            finishedAddingInvalidLoginToast: () => dispatch({type: C.FINISHED_ADDING_INVALID_LOGIN_TOAST}),
            signInWithFacebook: (toastManager) => dispatch(signInWithFacebook(toastManager)),
            signInWithGoogle: (toastManager) => dispatch(signInWithGoogle(toastManager)),
            showCreateAccount: () => dispatch({type: C.SHOW_CREATE_ACCOUNT}),
            hideCreateAccount: () => dispatch({type: C.SHOW_LOGIN}),
            signUp: (username, password, toastManager) => dispatch(signUp(username, password, toastManager))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withToastManager(Login)));