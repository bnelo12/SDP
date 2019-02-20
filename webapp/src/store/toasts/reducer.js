import { C } from './actions';

const defaultState = {
    shouldShowInvalidLoginToast: false,
    invalidLoginToastMessage: "",
    onInvalidLoginToastDidDismissCallback: null,
    addedToCart: {
        shouldShowToast: false,
        message: "",
        onToastDidDismissCallback: null
    }
};

export default (state=defaultState, action) => {
    switch(action.type) {
        case C.SHOW_INVALID_LOGIN_TOAST:
            return {
                ...state,
                shouldShowInvalidLoginToast: true,
                invalidLoginToastMessage: action.message,
                onInvalidLoginToastDidDismissCallback: action.callback
            }
        case C.DISMISS_INVALID_LOGIN_TOAST:
            return {
                ...state,
                shouldShowInvalidLoginToast: false,
            }
        case C.SHOW_ADDED_TO_CART_TOAST:
            return {
                ...state,
                addedToCart: {
                    shouldShowToast: true,
                    message: action.message,
                    onToastDidDismissCallback: action.callback
                }
            }
        case C.DISMISS_ADDED_TO_CART_TOAST:
            return {
                ...state,
                addedToCart: {
                    ...state.addedToCart,
                    shouldShowToast: false
                }
            }
        default: 
            return state;
    }
}