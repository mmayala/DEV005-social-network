import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.js';
import login from './components/login.js';
import register from './components/register.js';
import muro from './components/muro.js';
import error from './components/error.js';

const routes = [
  { path: '/', component: login },
  { path: '/register', component: register },
  { path: '/muro', component: muro },
  { path: '/error', component: error },
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
    root.append(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    navigateTo('/muro');
  } else if (window.location.pathname === '/muro' && user == null) {
    navigateTo(defaultRoute);
  }
  navigateTo(window.location.pathname || defaultRoute);
});
