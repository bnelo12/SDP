import { connect } from 'react-redux';

import { logout } from '../../store/user/actions';

import Logout from './Logout';

const mapStateToProps = state => Object.create(null);

const mapDispatchToProps = dispatch => {
    return {
        userDispatch: {
            logout: function() {
                dispatch(logout());
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);