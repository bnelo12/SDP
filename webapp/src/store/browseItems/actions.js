import firebase from "firebase/app";
import "firebase/firestore";

import { addItemToCart } from '../cart/actions'

export const C = {
    SUBSCRIBE_TO_BROWSE_ITEMS_DATA: "SUBSCRIBE_TO_BROWSE_ITEMS_DATA",
    UNSUBSCRIBE_TO_BROWSE_ITEMS_DATA: "UNSUBSCRIBE_TO_BROWSE_ITEMS_DATA",
    RECEIVED_BROWSE_ITEMS_DATA: "RECEIVED_BROWSE_ITEMS_DATA",
    WRITE_BROWSE_ITEMS_DATA: "WRITE_BROWSE_ITEMS_DATA",
    WRITE_BROWSE_ITEMS_DATA_SUCCESS: "WRITE_BROWSE_ITEMS_DATA_SUCCESS",
    WRITE_BROWSE_ITEMS_DATA_FAIL: "WRITE_BROWSE_ITEMS_DATA_FAIL"
}

export const addCountToBrowseItem = (id, count) => dispatch => {
    var db = firebase.firestore();        
    var ref = db.collection("browseItems").doc(id);
    dispatch({type: C.WRITE_BROWSE_ITEMS_DATA});
    db.runTransaction(async (transaction) => {
        return transaction.get(ref).then(function(doc) {
            var newCount = doc.data().count + count;
            transaction.update(ref, { count: newCount });
        });
    }).then(function() {
        dispatch({type: C.WRITE_BROWSE_ITEMS_DATA_SUCCESS});
    }).catch(function(error) {
        console.error(error);
        dispatch({type: C.WRITE_BROWSE_ITEMS_DATA_FAIL});
    });
}

export const subscribeToBrowseItemsData = () => dispatch => {
    var db = firebase.firestore();    
    var reference = db.collection("browseItems")
        .onSnapshot(function(snapshot) {
            var newData = Object.create(null);
            for (let change of snapshot.docChanges()){
                if (change.type === "added" || change.type === "modified") {
                    newData[change.doc.id] = change.doc.data();
                }
            }
            dispatch({type: C.RECEIVED_BROWSE_ITEMS_DATA, items: newData});
        });
    dispatch({type: C.SUBSCRIBE_TO_BROWSE_ITEMS_DATA, reference})
}

export const unsubscribeToBrowseItemsData = (reference) => dispatch => {
    if (reference) {
        reference();
    }
    dispatch({type: C.UNSUBSCRIBE_TO_BROWSE_ITEMS_DATA})
}

export const handleBrowseItemClicked = (id, item, user) => dispatch => {
    var db = firebase.firestore();        
    var ref = db.collection("browseItems").doc(id);
    dispatch({type: C.WRITE_BROWSE_ITEMS_DATA});
    db.runTransaction(function(transaction) {
        return transaction.get(ref).then(function(doc) {
            var newCount = doc.data().count - 1;
            transaction.update(ref, { count: newCount });
        });
    }).then(function() {
        dispatch(addItemToCart(id, item, user));
        dispatch({type: C.WRITE_BROWSE_ITEMS_DATA_SUCCESS});
    }).catch(function(error) {
        console.error(error);
        dispatch({type: C.WRITE_BROWSE_ITEMS_DATA_FAIL});
    });

}