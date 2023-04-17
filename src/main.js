// Este es el punto de entrada de tu aplicacion
import { onAuthStateChanged } from 'firebase/auth';
import { myFunction } from './lib/index.js';
import { auth } from './firebase.js';
import login from './components/login.js';
import register from './components/register.js';
import wall from './components/wall.js';

//import './lib/registerForm.js';

// import { async } from 'regenerator-runtime';
// import { signin } from './components/signin.js';

onAuthStateChanged(auth, async (user) => {
  console.log(user);
});

const routes = [
  { path: '/', component: login },
  { path: '/register', component: register },
  { path: '/wall', component: wall },
];

const defaultRoute = '/';

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
