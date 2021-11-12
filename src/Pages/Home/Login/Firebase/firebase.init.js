import { initializeApp } from "firebase/app";

import firebaseConfig from "../Firebase/firebase.config"

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}
export default initializeFirebase;
