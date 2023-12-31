var firebaseConfig = {
  apiKey: "AIzaSyBlo6y6evat7l1KRvF3R7ptnfvd6wJXMwE",
  authDomain: "test-push-message-e7f90.firebaseapp.com",
  projectId: "test-push-message-e7f90",
  storageBucket: "test-push-message-e7f90.appspot.com",
  messagingSenderId: "506456702082",
  appId: "1:506456702082:web:8f9d2fd50f484ccfb7c89b",
  measurementId: "G-XXZ2G21RRF",
};

// initialize firebase app
firebase.initializeApp(firebaseConfig);
const serviceWorkerRegistration = await navigator.serviceWorker.register(
  "/firebase-fcm/firebase-messaging-sw.js"
);
const messaging = firebase.messaging();
// messaging.useServiceWorker(serviceWorkerRegistration);

// Handle notification click event in foreground
messaging.onMessage(function (payload) {
  console.log("Message received on foreground: ", payload);
  // ...
});

// Request permission from the user to show notifications
Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    console.log("Notification permission granted.");
    // Get the device token for the current user
    messaging.getToken({
        serviceWorkerRegistration: serviceWorkerRegistration
    }).then(function (token) {
      console.log("Token: " + token);
      // add token to html
      document.getElementById("token").innerHTML = token;

      // Send this token to your backend server
      // for later use when sending push messages
    });
  } else {
    console.log("Unable to get permission to notify.");
  }
});
