importScripts('https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.0/firebase-messaging.js');
const firebaseConfig = {
    apiKey: "AIzaSyCyBe89v-xntdHShjeLqnBUV0tzvGSysTM",
    authDomain: "fir-push-notification-537c9.firebaseapp.com",
    projectId: "fir-push-notification-537c9",
    storageBucket: "fir-push-notification-537c9.appspot.com",
    messagingSenderId: "863002116215",
    appId: "1:863002116215:web:658c6ec5e099d6f430c672"
  };
firebase.initializizeApp(firebaseConfig)

const messaging =firebase.messaging()

messaging.onBackgroundMessage((payload)=>{
    console.log('[firebase-messaging-sw.js] Received BAckground Message',payload)
})