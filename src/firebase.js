// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// Import the function onAuthStateChanged
// import { onAuthStateChanged } from 'firebase/auth';
//

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDYHMcJkdOBZiXh8OkdwOwD8trUYcI-E88',
  authDomain: 'sn-cinematch.firebaseapp.com',
  projectId: 'sn-cinematch',
  storageBucket: 'sn-cinematch.appspot.com',
  messagingSenderId: '520840680277',
  appId: '1:520840680277:web:fade0ab3d076f3b16fd5dc',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// User is signed in:
// let signedIn = false;
// export function userSignedIn() {
//   onAuthStateChanged(auth, async (user) => {
//     if (user) {
//       signedIn = true;
//       console.log('Usuario logueado');
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       console.log(user);
//       console.log(uid);
//       // ...
//     } else {
//       // User is signed out
//       // ...
//       signedIn = false;
//       console.log('El usuario no se ha logueado');
//     }
//   });
//   console.log(signedIn);
//   return signedIn;
// }

// console.log(db.length);

// db.forEach((element) => {
//   //const post = element.data();
//   console.log(element);
// });
