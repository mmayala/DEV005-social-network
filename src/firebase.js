import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
