import firebase from 'firebase'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAJUAoBmqU_OTg6YNUAhFRopdMRlhXvBlQ",
    authDomain: "curso-react-firebase-2bdaf.firebaseapp.com",
    projectId: "curso-react-firebase-2bdaf",
    storageBucket: "curso-react-firebase-2bdaf.appspot.com",
    messagingSenderId: "1020645183085",
    appId: "1:1020645183085:web:218c3fc2e8b9a4adf27964",
    measurementId: "G-LGCD9466LQ"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  const auth=fire.auth()

  export {auth}