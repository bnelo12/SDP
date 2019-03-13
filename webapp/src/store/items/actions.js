import firebase from "firebase/app";
import "firebase/firestore";

export const C = {
    SUBSCRIBE_TO_ITEMS_DATA: "SUBSCRIBE_TO_ITEMS_DATA",
    UNSUBSCRIBE_FROM_ITEMS_DATA: "UNSUBSCRIBE_FROM_ITEMS_DATA",
    RECEIVED_ITEMS_DATA: "RECEIVED_ITEMS_DATA",
    WRITE_ITEMS_DATA: "WRITE_ITEMS_DATA",
    WRITE_ITEMS_DATA_SUCCESS: "WRITE_ITEMS_DATA_SUCCESS",
    WRITE_ITEMS_DATA_FAIL: "WRITE_ITEMS_DATA_FAIL",
}

export const subscribeToItemsData = () => dispatch => {
    var db = firebase.firestore();    
    var reference = db.collection("items").doc("items")
        .onSnapshot((doc) => {
            dispatch({type: C.RECEIVED_ITEMS_DATA, items: doc.data()});
        });
    dispatch({type: C.SUBSCRIBE_TO_ITEMS_DATA, reference})
}

export const unsubscribeFromItemsData = (reference) => dispatch => {
    if (reference) {
        reference();
    }
    dispatch({type: C.UNSUBSCRIBE_FROM_ITEMS_DATA})
}

export const removeItemsFromOrder = (order) => dispatch => {
    
}