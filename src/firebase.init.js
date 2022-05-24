// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId

    apiKey: "AIzaSyBGc_vnF0SxREt1xBA7jv76ojcsaQTQnyE",
    authDomain: "horizon-6e2ea.firebaseapp.com",
    projectId: "horizon-6e2ea",
    storageBucket: "horizon-6e2ea.appspot.com",
    messagingSenderId: "595615308163",
    appId: "1:595615308163:web:3eb928f87588b8bbf53eb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;