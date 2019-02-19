import { C } from './actions';

const defaultState = {
    shouldShowInvalidLoginToast: false,
    invalidLoginToastMessage: "",
    onInvalidLoginToastDidDismissCallback: null
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
        default: 
            return state;
    }
}