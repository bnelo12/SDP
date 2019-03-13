import { connect } from 'react-redux';

import authenticatedPage from '../authenticatedPage';

import { subscribeToBrowseItemsData, unsubscribeToBrowseItemsData, handleBrowseItemClicked } from '../../store/browseItems/actions'
import { subscribeToCartData, unsubscribeToCartData } from '../../store/cart/actions';
import { cancelOrder, subscribeToQueueData, unsubscribeFromQueueData } from '../../store/queue/actions';
import { subscribeToItemsData, unsubscribeFromItemsData } from '../../store/items/actions';
import { submitOrder } from '../../store/order/actions';

import Home from './Home';

const mapStateToProps = state => {
    return {
        user: state.user,
        queue: state.queue,
        items: state.items,
        cart: state.cart
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
            cancelOrder: (user) => dispatch(cancelOrder(user)),
            subscribeToQueueData: () => dispatch(subscribeToQueueData()),
            unsubscribeFromQueueData: (reference) => dispatch(unsubscribeFromQueueData(reference))
        },
        itemsDispatch: {
            subscribeToItemsData: () => dispatch(subscribeToItemsData()),
            unsubscribeFromItemsData: (reference) => dispatch(unsubscribeFromItemsData(reference))
        },
        orderDispatch: {
            submitOrder: (order) => dispatch(submitOrder(order))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(authenticatedPage(Home));