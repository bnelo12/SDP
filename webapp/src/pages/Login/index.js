import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withToastManager } from 'react-toast-notifications';

import { C, login, subscribeOnAuthStateChanged, unsubscribeOnAuthStateChanged, finishedAddingInvalidLoginToast } from '../../store/user/actions';

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
            finishedAddingInvalidLoginToast: () => dispatch({type: C.FINISHED_ADDING_INVALID_LOGIN_TOAST})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withToastManager(Login)));