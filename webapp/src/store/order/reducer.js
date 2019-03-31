import { C } from './actions'

const defaultState = {
    items: [],
    dataReference: null,
    orders: [],
    robotStatus: true
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case C.SUBSCRIBE_TO_ORDERS_DATA:
            return {
                ...state,
                dataReference: action.reference
            }
        case C.UNSUBSCRIBE_FROM_ORDERS_DATA:
            return {
                ...state,
                dataReference: null
            }
        case C.RECEIVED_ROBOT_STATUS:
            return {
                ...state,
                robotStatus: action.status
            }
        case C.RECEIVED_ORDERS_DATA:
            return {
                ...state,
                haveReceived: true,
                orders: action.orders
            }
        case C.SUBMIT_ORDER:
            return {
                ...state,
                items: action.items
            }
        default: return state;
    }
}