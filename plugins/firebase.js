
// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getMessaging } from 'firebase/messaging'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyBe89v-xntdHShjeLqnBUV0tzvGSysTM",
  authDomain: "fir-push-notification-537c9.firebaseapp.com",
  projectId: "fir-push-notification-537c9",
  storageBucket: "fir-push-notification-537c9.appspot.com",
  messagingSenderId: "863002116215",
  appId: "1:863002116215:web:658c6ec5e099d6f430c672"
};

// Initialize Firebase
const apps = getApps()

const  app = !apps.length ? initializeApp(firebaseConfig): apps[0]

// const app = initializeApp(firebaseConfig);

export  const messaging =getMessaging(app)