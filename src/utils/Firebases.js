import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig={
    apiKey: "AIzaSyAleUZk7o4mM_wuwRzPD9nAIlm1NnpEagk",
    authDomain: "nava-383905.firebaseapp.com",
    projectId: "nava-383905",
    databaseURL:"https://nava-383905-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "nava-383905.appspot.com",
    messagingSenderId: "427537301675",
    appId: "1:427537301675:web:ffc355ca84d60c73ab77ee",
    measurementId: "G-M243R5BTG7"
}

firebase.initializeApp(firebaseConfig);

export const dataRef=firebase.database();

export default firebase;

