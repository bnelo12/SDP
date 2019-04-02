import { connect } from 'react-redux';

import authenticatedPage from '../authenticatedPage';

import { subscribeToBrowseItemsData, unsubscribeToBrowseItemsData, handleBrowseItemClicked } from '../../store/browseItems/actions'
import { subscribeToCartData, unsubscribeToCartData } from '../../store/cart/actions';
import { cancelOrder, subscribeToQueueData, unsubscribeFromQueueData } from '../../store/queue/actions';
import { subscribeToItemsData, unsubscribeFromItemsData } from '../../store/items/actions';
import { subscribeToOrdersData, unsubscribeFromOrdersData } from '../../store/order/actions';
import { beginReturn, incrementStep, submitReturn, finishReturn } from '../../store/return/actions';

import { withToastManager  } from 'react-toast-notifications';

import { submitOrder } from '../../store/order/actions';

import Home from './Home';

const mapStateToProps = state => {
    return {
        user: state.user,
        queue: state.queue,
        items: state.items,
        cart: state.cart,
        order: state.order,
        returnItems: state.returnItems,
        browseItems: state.browseItems
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
            subscribeToOrdersData: (email) => dispatch(subscribeToOrdersData(email)),
            unsubscribeFromOrdersData: (reference) => dispatch(unsubscribeFromOrdersData(reference)), 
            submitOrder: (order) => dispatch(submitOrder(order))
        },
        returnItemsDispatch: {
            beginReturn: () => dispatch(beginReturn()),
            incrementStep: () => dispatch(incrementStep()),
            submitReturn: (isFinal, isWaitingForUser, position) => dispatch(submitReturn(isFinal, isWaitingForUser, position)),
            finishReturn: (returnNumber, returnItems, email, orders, items) => dispatch(finishReturn(returnNumber, returnItems, email, orders, items))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(authenticatedPage(withToastManager(Home)));