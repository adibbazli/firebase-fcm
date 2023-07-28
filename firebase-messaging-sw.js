
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBlo6y6evat7l1KRvF3R7ptnfvd6wJXMwE",
    authDomain: "test-push-message-e7f90.firebaseapp.com",
    projectId: "test-push-message-e7f90",
    storageBucket: "test-push-message-e7f90.appspot.com",
    messagingSenderId: "506456702082",
    appId: "1:506456702082:web:8f9d2fd50f484ccfb7c89b",
    measurementId: "G-XXZ2G21RRF"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Handle incoming messages
messaging.onBackgroundMessage(function (payload) {
    console.log("Message received: ", payload);
    // Handle the push message here
});