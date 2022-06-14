// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoUA9PHlPqwm9mKuwEBbnUa0wjG6tcTyM",
    authDomain: "netflix-clone-691fd.firebaseapp.com",
    projectId: "netflix-clone-691fd",
    storageBucket: "netflix-clone-691fd.appspot.com",
    messagingSenderId: "104180269401",
    appId: "1:104180269401:web:e3ddd427218b27ec34cc48",
    measurementId: "G-PV2CVDZH42"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }