import { C } from './actions'

const defaultState = {
    items: {},
    dataReference: null,
    haveReceived: false,
    isWritingData: false
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case C.ADD_ITEM_TO_CART:
            if (state.items[action.id] === undefined) {
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [action.id]: {
                            count: 1,
                            name: action.item.name
                        }
                    }
                }
            }
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.id]: {
                        ...state.items[action.id],
                        count: state.items[action.id].count + 1,
                    }
                }
            }
        case C.SUBSCRIBE_TO_CART_DATA:
            return {
                ...state,
                dataReference: action.reference
            }
        case C.UNSUBSCRIBE_FROM_CART_DATA:
            return {
                ...state,
                dataReference: null
            }
        case C.RECEIVED_CART_DATA:
            return {
                ...state,
                haveReceived: true,
                items: action.items
            }
        case C.WRITE_CART_DATA: {
            return {
                ...state,
                isWritingData: true
            }
        }
        case C.WRITE_CART_DATA_SUCCESS:
            return {
                ...state,
                isWritingData: false
            }
        case C.WRITE_CART_DATA_FAIL:
            return {
                ...state,
                isWritingData: false
            }
        case C.REMOVE_ITEM_FROM_CART:
            const newState = {
                ...state,
            }
            delete newState.items[action.id]
            return newState
        case C.REMOVE_SINGLE_FROM_CART:
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.id]: {
                        count: state.items[action.id].count - 1,
                        name: state.items[action.id].name
                    }
                }
            }
        case C.RESET:
            return {
                items: {},
                dataReference: null,
                haveReceived: false,
                isWritingData: false
            }
        default: return state;
    }
}