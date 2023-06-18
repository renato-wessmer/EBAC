// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMDygLrBTHaRoU4wXQbl2AaRB0dAWXR6s",
    authDomain: "tiktok-48f37.firebaseapp.com",
    projectId: "tiktok-48f37",
    storageBucket: "tiktok-48f37.appspot.com",
    messagingSenderId: "777251668528",
    appId: "1:777251668528:web:5fd2ab31fa2071af6ca3f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =  getFirestore(app);

export default db;