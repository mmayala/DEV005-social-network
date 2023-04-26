// aqui exportaras las funciones que necesites
import {
  db, getDocs, collection, addDoc, onSnapshot,
} from '../firestore';

const postCollection = collection(db, 'posts');

export const addPost = (comment) => {
  addDoc(postCollection, {
    comment,
  });
};
export const postSnapshot = getDocs(postCollection);
export const paintRealTime = (callback) => onSnapshot(postCollection, callback);
