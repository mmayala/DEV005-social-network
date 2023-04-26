import { getFirestore, collection, addDoc, getDocs, onSnapshot, orderBy, query} from "firebase/firestore";
import { app } from './firebase.js';

export const db = getFirestore(app);

export { collection, addDoc, getDocs, onSnapshot, orderBy, query}
