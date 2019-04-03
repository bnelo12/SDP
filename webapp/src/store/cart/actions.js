import firebase from "firebase/app";
import "firebase/firestore";

import { addCountToBrowseItem } from "../browseItems/actions";

export const C = {
    ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
    RECEIVED_CART_DATA: "RECEIVED_CART_DATA",
    SUBSCRIBE_TO_CART_DATA: "SUBSCRIBE_TO_CART_DATA",
    UNSUBSCRIBE_FROM_CART_DATA: "UNSUBSCRIBE_FROM_CART_DATA",
    WRITE_CART_DATA: "WRITE_CART_DATA",
    WRITE_CART_DATA_SUCCESS: "WRITE_CART_DATA_SUCCESS",
    WRITE_CART_DATA_FAIL: "WRITE_CART_DATA_FAIL",
    REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART",
    REMOVE_SINGLE_FROM_CART: "REMOVE_SINGLE_FROM_CART",
    EMPTY_CART: "EMPTY_CART",
    RESET: "RESET"
}

export const addItemToCart = (id, item, user) => dispatch => {
    var db = firebase.firestore(); 
    var ref = db.collection("cart").doc(user);
    dispatch({type: C.ADD_ITEM_TO_CART, id, item});
    dispatch({type: C.WRITE_CART_DATA});
    db.runTransaction((transaction) => {
        return transaction.get(ref).then(function(doc) {
            transaction.update(ref, { 
                [id]: {
                    name: item.name,
                    count: doc.data()[id] ? doc.data()[id].count + 1 : 1
                }
            });
        });
    }).then(function() {
        dispatch({type: C.WRITE_CART_DATA_SUCCESS});
    }).catch(function(error) {
        console.error(error);
        dispatch({type: C.WRITE_CART_DATA_FAIL});
    });
}

export const subscribeToCartData = (user) => dispatch => {
    var db = firebase.firestore();   
    var reference = db.collection("cart").doc(user);
    var func = reference.onSnapshot((doc) => {
        if (doc.exists) {
            const items = doc.data();
            dispatch({type: C.RECEIVED_CART_DATA, items});
        } else {
            reference.set({})
                .then(() => {
                    dispatch({type: C.WRITE_CART_DATA_SUCCESS});
                })
                .catch((error) => {
                    console.error(error);
                    dispatch({type: C.WRITE_CART_DATA_FAIL});
                });
            dispatch({type: C.WRITE_CART_DATA});
        }
    });
    dispatch({type: C.SUBSCRIBE_TO_CART_DATA, func})
}

export const unsubscribeToCartData = (reference) => dispatch => {
    if (reference) {
        reference();
    }
    dispatch({type: C.UNSUBSCRIBE_FROM_CART_DATA})
}

export const removeItemFromCart = (id, count, user) => dispatch => {
    var db = firebase.firestore();
    var ref = db.collection("cart").doc(user);
    dispatch({type: C.REMOVE_ITEM_FROM_CART, id});
    dispatch({type: C.WRITE_CART_DATA});
    db.runTransaction((transaction) => {
        return transaction.get(ref).then((doc) => {
            transaction.update(ref, { 
                [id]: firebase.firestore.FieldValue.delete()
            });
        });
    }).then(function() {
        dispatch(addCountToBrowseItem(id, count));
        dispatch({type: C.WRITE_CART_DATA_SUCCESS});
    }).catch(function(error) {
        console.error(error);
        dispatch({type: C.WRITE_CART_DATA_FAIL});
    });
}

export const emptyCart = (user) => dispatch => {
    var db = firebase.firestore();
    var ref = db.collection("cart").doc(user);
    dispatch({type: C.EMPTY_CART});
    db.runTransaction((transaction) => {
        return transaction.get(ref).then((doc) => {
            transaction.set(ref, {});
        });
    }).then(function() {
        dispatch({type: C.WRITE_CART_DATA_SUCCESS});
    }).catch(function(error) {
        console.error(error);
        dispatch({type: C.WRITE_CART_DATA_FAIL});
    });
}

export const removeOneFromCart = (id, user) => dispatch => {
    var db = firebase.firestore();
    var ref = db.collection("cart").doc(user);
    dispatch({type: C.REMOVE_SINGLE_FROM_CART, id});
    dispatch({type: C.WRITE_CART_DATA});
    db.runTransaction((transaction) => {
        return transaction.get(ref).then((doc) => {
            transaction.update(ref, { 
                [id]: {
                    name: doc.data()[id].name,
                    count: doc.data()[id].count - 1
                }
            });
        });
    }).then(function() {
        dispatch(addCountToBrowseItem(id, 1));
        dispatch({type: C.WRITE_CART_DATA_SUCCESS});
    }).catch(function(error) {
        console.error(error);
        dispatch({type: C.WRITE_CART_DATA_FAIL});
    });
}

export const submitOrder = (order) => dispatch => {

}