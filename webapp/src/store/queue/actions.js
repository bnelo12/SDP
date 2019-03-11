import firebase from "firebase/app";
import "firebase/firestore";

export const C = {
    SHOW_QUEUE: "SHOW_QUEUE",
    HIDE_QUEUE: "HIDE_QUEUE",
    SUBSCRIBE_TO_QUEUE_DATA: "SUBSCRIBE_TO_QUEUE_DATA",
    UNSUBSCRIBE_FROM_QUEUE_DATA: "UNSUBSCRIBE_FROM_QUEUE_DATA",
    RECEIVED_QUEUE_DATA: "RECEIVED_QUEUE_DATA"
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

export const subscribeToQueueData = () => dispatch => {
    var db = firebase.firestore();    
    var reference = db.collection("queue").doc("queue")
        .onSnapshot((doc) => {
            dispatch({type: C.RECEIVED_QUEUE_DATA, queue: doc.data()});
        });
    dispatch({type: C.SUBSCRIBE_TO_QUEUE_DATA, reference})
}

export const unsubscribeFromQueueData = (reference) => dispatch => {
    if (reference) {
        reference();
    }
    dispatch({type: C.UNSUBSCRIBE_FROM_QUEUE_DATA})
}