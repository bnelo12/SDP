export const C = {
    SHOW_QUEUE: "SHOW_QUEUE",
    HIDE_QUEUE: "HIDE_QUEUE"
}

export const showQueue = () => dispatch => {
    dispatch({type: C.SHOW_QUEUE})
}

export const hideQueue = () => dispatch => {
    dispatch({type: C.HIDE_QUEUE})
}

export const cancelOrder = (user) => dispatch => {
    dispatch(hideQueue());
}