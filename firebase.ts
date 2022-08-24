// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAm5uV4__89hEczjQTNE4KDppyCoiu-BoM",
    authDomain: "react-native-firebase-au-70ec4.firebaseapp.com",
    projectId: "react-native-firebase-au-70ec4",
    storageBucket: "react-native-firebase-au-70ec4.appspot.com",
    messagingSenderId: "247457643371",
    appId: "1:247457643371:web:49ac4e820023d02379aa2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };