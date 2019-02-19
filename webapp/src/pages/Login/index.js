import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login, subscribeOnAuthStateChanged, unsubscribeOnAuthStateChanged } from '../../store/user/actions';

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
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));