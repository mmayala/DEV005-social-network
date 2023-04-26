import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { app } from './firebase.js';

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export {
  collection, addDoc, getDocs, onSnapshot, orderBy, query,
};
