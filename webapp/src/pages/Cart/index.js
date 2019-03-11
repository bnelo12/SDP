import { connect } from 'react-redux';
import { withToastManager  } from 'react-toast-notifications';

import Cart from './Cart';

import { removeItemFromCart, removeOneFromCart } from '../../store/cart/actions';
import { showQueue } from '../../store/queue/actions';

const mapStateToProps = state => {
    return {
        cart: state.cart,
        email: state.user.userRecord.email
    };
}

const mapDispatchToProps = dispatch => {
    return {
        removeItemFromCart: (id, count, user) => dispatch(removeItemFromCart(id, count, user)),
        removeOneFromCart: (id, user) => dispatch(removeOneFromCart(id, user)),
        showQueue: () => dispatch(showQueue())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withToastManager(Cart));