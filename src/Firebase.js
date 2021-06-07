import firebase from "firebase";

<script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js"></script>;

<script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-analytics.js"></script>;

const firebaseConfig = {
  apiKey: "AIzaSyARNLvCuo2GGfeYusw00UueFlkzzzm17ok",
  authDomain: "inspired-233da.firebaseapp.com",
  projectId: "inspired-233da",
  storageBucket: "inspired-233da.appspot.com",
  messagingSenderId: "526792007585",
  appId: "1:526792007585:web:5e40b62888f6bdade4b5e0",
  measurementId: "G-9WQDKSCGX7",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
