// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {    
    apiKey: "AIzaSyCigcXwYU02DMNJBEpNZwOTYrQDqqOkE1g",
    authDomain: "crud-trello.firebaseapp.com",
    projectId: "crud-trello",
    storageBucket: "crud-trello.appspot.com",
    messagingSenderId: "150662124593",
    appId: "1:150662124593:web:b143445ad697151d4df110"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;