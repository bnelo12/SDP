import firebase from "firebase/app";
import "firebase/firestore";

import { emptyCart } from '../cart/actions';

export const C = {
    SUBMIT_ORDER: "SUBMIT_ORDER"
}

export const submitOrder = (order) => dispatch => {
    var db = firebase.firestore();
    dispatch({type: C.SUBMIT_ORDER, items: order.items})
    dispatch(emptyCart(order.user));
    db.collection("items").doc("items").set({items: order.updateItems});
    db.collection("orders").doc(order.user).set({orders: order.userOrder});
    db.collection("orders").doc("order").set({
        items: order.items
    });
} 