import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDdFU-1x0-CaZkI1Qq-b3aq29F87ErKkvM",
    authDomain: "nlp-e749c.firebaseapp.com",
    databaseURL: "https://nlp-e749c.firebaseio.com",
    projectId: "nlp-e749c",
    storageBucket: "nlp-e749c.appspot.com",
    messagingSenderId: "356886887142"
  };
  
firebase.initializeApp(config);
export default firebase;
