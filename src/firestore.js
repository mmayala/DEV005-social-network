import {
  getFirestore, collection, addDoc, getDocs, onSnapshot, orderBy, query, deleteDoc, doc,
} from 'firebase/firestore';
import { app } from './firebase.js';

export const db = getFirestore(app);

export {
  collection, addDoc, getDocs, onSnapshot, orderBy, query,
};

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));
