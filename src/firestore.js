import {
  getFirestore, collection, addDoc, getDocs, onSnapshot, orderBy, query, deleteDoc, doc, getDoc,
  updateDoc } from 'firebase/firestore';
import { app } from './firebase.js';

export const db = getFirestore(app);

export {
  collection, addDoc, getDocs, onSnapshot, orderBy, query,
};

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));
export const getPost = (id) => getDoc(doc(db, 'posts', id));
export const updatePost = (id, newComment) => updateDoc(doc(db, 'posts', id), newComment);
