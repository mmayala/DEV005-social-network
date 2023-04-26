// Este es el punto de entrada de tu aplicacion
// import { onAuthStateChanged } from 'firebase/auth';

import { myFunction } from './lib/index.js';
import { db,  collection, addDoc, getDocs, onSnapshot, orderBy, query,} from './firestore.js';
import login from './components/login.js';
import register from './components/register.js';
import wall from './components/wall.js';

/* onAuthStateChanged(auth, async (user) => {
  // console.log(user);
}); */
/* onAuthStateChanged(auth, async (user) => {
  if (user) {
    // Add a new document in collection "cities"
    const postSnapshot =  await setDoc(doc(db, 'Post', 'asddasfafl34l2k34l23'), {
      Comentario:'Maléfica, me encantó',
      Like:'2',
    });
    console.log(postSnapshot);
    // const postSnapshot = await getDocs(collection(db, 'Post'));
    // const data = postSnapshot.docs;
    // data.forEach((doc) => {
    //   const post = doc.data();
    //   console.log(post);
    // });
  }
}); */
const postCollection = collection(db, 'posts');

export const addPost = (comment) => {
  addDoc(postCollection, {
    comment,
  });
};

const routes = [
  { path: '/', component: login },
  { path: '/register', component: register },
  { path: '/wall', component: wall },
];

// const defaultRoute = '/';

const root = document.getElementById('root');

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);
  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );
    root.innerHTML = '';
    root.appendChild(route.component(navigateTo));
  }
}

navigateTo(window.location.pathname);

myFunction();
