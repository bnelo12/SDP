const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.getOrder = functions.https.onRequest((request, response) => {
    var db = admin.firestore();
    var docRef = db.collection("orders").doc("order");
    docRef.get().then(function(doc) {
        response.send(doc.data());
    }).catch(function(error) {
        response.send(error);
    });
});

exports.finishOrder = functions.https.onRequest((request, response) => {
    var db = admin.firestore();
    var orderRef = db.collection("orders").doc("order");
    orderRef.set({items: []});
    var queueRef = db.collection("queue").doc("queue");
    queueRef.get().then(doc => {
        var queue = doc.data();
        queue.users.shift();
        queueRef.set(queue);
    })
    response.send("success");
});
   
