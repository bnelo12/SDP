import { connect } from 'react-redux';
import { withToastManager  } from 'react-toast-notifications';

import { addUserToQueue } from '../../store/queue/actions';
import { setReturnNumber } from '../../store/return/actions';

import Return from './Return';


const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        browseItems: state.browseItems.items,
        email: state.user.userRecord.email
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addUserToQueue: (user) => dispatch(addUserToQueue(user, true)),
        setReturnNumber: (returnNumber) => dispatch(setReturnNumber(returnNumber))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withToastManager(Return));