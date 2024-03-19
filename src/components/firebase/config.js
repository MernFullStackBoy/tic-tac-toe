import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDD7EBlFJW1sZbjRMA2RnlB7TtbdGUMjjU",
    authDomain: "tic-tac-toe-490c4.firebaseapp.com",
    projectId: "tic-tac-toe-490c4",
    storageBucket: "tic-tac-toe-490c4.appspot.com",
    messagingSenderId: "350633446465",
    appId: "1:350633446465:web:8be5eac6e29927088e4ac0",
    measurementId: "G-MM643GMVDM"
};

const app = initializeApp(firebaseConfig);
export default app