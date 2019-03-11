export const C = {
    SHOW_QUEUE: "SHOW_QUEUE",
    HIDE_QUEUE: "HIDE_QUEUE"
}

export const showQueue = () => dispatch => {
    dispatch({type: C.SHOW_QUEUE})
}