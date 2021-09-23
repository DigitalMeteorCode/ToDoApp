//recherches sur  la  doc de firebase pour la nouvelle version : DEMANDER à CHRIS DE CHERCHER LES BONNES METHODES POUR LA NOUVELLE VERSION DE FIREBASE

import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

//Configurer Firebase avec SDK de la console Firebase (sur le site)
const firebaseConfig = {
    apiKey: "AIzaSyDsuliXndvhklkwH25DDeNINhOaX7RFmKU",
    authDomain: "todo-list-app-89abd.firebaseapp.com",
    projectId: "todo-list-app-89abd",
    storageBucket: "todo-list-app-89abd.appspot.com",
    messagingSenderId: "731720285104",
    appId: "1:731720285104:web:969ef93fead20a4d1f3475"
  };

const app = initializeApp(firebaseConfig);


//S'authentifier anonymement
const auth = getAuth();
signInAnonymously(auth).then(() => {
    // Signed in..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);//
  });

onAuthStateChanged(auth, (user) => {
    if (user) {
        callback(null);//
      const uid = user.uid;
      console.log(uid);//
    } else {
        signInAnonymously().catch(error => {//
            callback(error);//
        });
    }
  });