import firebase from "firebase/app";
import "firebase/firestore";

export const C = {
    SHOW_QUEUE: "SHOW_QUEUE",
    HIDE_QUEUE: "HIDE_QUEUE",
    SUBSCRIBE_TO_QUEUE_DATA: "SUBSCRIBE_TO_QUEUE_DATA",
    UNSUBSCRIBE_FROM_QUEUE_DATA: "UNSUBSCRIBE_FROM_QUEUE_DATA",
    RECEIVED_QUEUE_DATA: "RECEIVED_QUEUE_DATA",
    WRITE_QUEUE_DATA: "WRITE_QUEUE_DATA",
    WRITE_QUEUE_DATA_SUCCESS: "WRITE_QUEUE_DATA_SUCCESS",
    WRITE_QUEUE_DATA_FAIL: "WRITE_QUEUE_DATA_FAIL",
}

export const showQueue = (isReturn) => dispatch => {
    dispatch({type: C.SHOW_QUEUE, isReturn})
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

export const addUserToQueue = (user, isReturn) => dispatch => {
    var db = firebase.firestore();
    var ref = db.collection("queue").doc("queue");
    dispatch({type: C.WRITE_QUEUE_DATA});
    dispatch(showQueue(isReturn));
    db.runTransaction((transaction) => {
        return transaction.get(ref).then((doc) => {
            var data = doc.data();
            data.users.push(user);
            transaction.update(ref, data);
        });
    }).then(function() {
        dispatch({type: C.WRITE_QUEUE_DATA_SUCCESS});
    }).catch(function(error) {
        console.error(error);
        dispatch({type: C.WRITE_QUEUE_DATA_FAIL});
    });
}