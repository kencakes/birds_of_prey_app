// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOZZ8o6SdIuDWfTjK2fqhMPJgx8Ee9hnk",
    authDomain: "birds-of-prey-app.firebaseapp.com",
    projectId: "birds-of-prey-app",
    storageBucket: "birds-of-prey-app.appspot.com",
    messagingSenderId: "193932834213",
    appId: "1:193932834213:web:cf817bca77f7a68df7a44c"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };
