// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
//

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCykW5p2IEFIoPR8jkSMx1Sekupf5PNEq0',
  authDomain: 'social-network-cinematch.firebaseapp.com',
  projectId: 'social-network-cinematch',
  storageBucket: 'social-network-cinematch.appspot.com',
  messagingSenderId: '367189343640',
  appId: '1:367189343640:web:e87cad3ad9d093de157fed',
  measurementId: 'G-L1EYGYCH35',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service

// console.log(db.length);

// db.forEach((element) => {
//   //const post = element.data();
//   console.log(element);
// });
