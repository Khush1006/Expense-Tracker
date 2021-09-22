import firebase from 'firebase';

const config = {
 apiKey: "AIzaSyBATrz8hIMSMYSBYp9mAaySbldAx7a3FGc",
    authDomain: "expense-tracker-8d3bb.firebaseapp.com",
    projectId: "expense-tracker-8d3bb",
    storageBucket: "expense-tracker-8d3bb.appspot.com",
    messagingSenderId: "222629295484",
    appId: "1:222629295484:web:f023f01f47b2f2e452a0f9",
    measurementId: "G-ZKWRZG9CSW"

};
const fire = firebase.initializeApp(config);
export default fire;