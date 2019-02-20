export const C = {
    SHOW_INVALID_LOGIN_TOAST: "SHOW_INVALID_LOGIN_TOAST",
    DISMISS_INVALID_LOGIN_TOAST: "DISMISS_INVALID_LOGIN_TOAST",
    SHOW_ADDED_TO_CART_TOAST: "SHOW_ADDED_TO_CART_TOAST",
    DISMISS_ADDED_TO_CART_TOAST: "DISMISS_ADDED_TO_CART_TOAST"
}

export const showInvalidLoginToast = (message) => dispatch => {
    dispatch(
        {
            type: C.SHOW_INVALID_LOGIN_TOAST,
            message,
            callback: () => dispatch({type: C.DISMISS_INVALID_LOGIN_TOAST})
        }
    );
}

export const showAddedToCartToast = (message) => dispatch => {
    dispatch(
        {
            type: C.SHOW_ADDED_TO_CART_TOAST,
            message,
            callback: () => dispatch({type: C.DISMISS_ADDED_TO_CART_TOAST})
        }
    );
}