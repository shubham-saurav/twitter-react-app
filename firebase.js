import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA2Ku0oS5DOUilQm5D8tbqtLAUVFbyIUuY",
    authDomain: "twitter-clone-c5000.firebaseapp.com",
    databaseURL: "https://twitter-clone-c5000.firebaseio.com",
    projectId: "twitter-clone-c5000",
    storageBucket: "twitter-clone-c5000.appspot.com",
    messagingSenderId: "784592013347",
    appId: "1:784592013347:web:8787c05544d2d131630996",
    measurementId: "G-ZWSFN7SGSW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;