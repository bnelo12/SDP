import { connect } from 'react-redux';

import authenticatedPage from '../authenticatedPage';

import { subscribeToBrowseItemsData, unsubscribeToBrowseItemsData, handleBrowseItemClicked } from '../../store/browseItems/actions'
import { subscribeToCartData, unsubscribeToCartData } from '../../store/cart/actions';
import { cancelOrder } from '../../store/queue/actions';

import Home from './Home';

const mapStateToProps = state => {
    return {
        user: state.user,
        queue: state.queue
    };
}

const mapDispatchToProps = dispatch => {
    return {
        browseItemsDispatch: {
            subscribeToBrowseItemsData: function() {
                dispatch(subscribeToBrowseItemsData());
            },
            unsubscribeToBrowseItemsData: () => dispatch(unsubscribeToBrowseItemsData()),
            handleBrowseItemClicked: () => dispatch(handleBrowseItemClicked())
        },
        cartDispatch: {
            subscribeToCartData: (user) => dispatch(subscribeToCartData(user)),
            unsubscribeToCartData: (user) => dispatch(unsubscribeToCartData(user))
        },
        queueDispatch: {
            cancelOrder: (user) => dispatch(cancelOrder(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(authenticatedPage(Home));