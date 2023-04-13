// Este es el punto de entrada de tu aplicacion
import { onAuthStateChanged } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { myFunction } from './lib/index.js';
import { app, analytics, auth } from './firebase.js';
import login from './components/login.js';
import register from './components/register.js';
import './components/signinForm.js';

//import { async } from "regenerator-runtime";
// import { signin } from './components/signin.js';

onAuthStateChanged(auth, async (user) => {
  console.log(user);
});

const routes = [
  { path: '/', component: login },
  { path: '/register', component: register },
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
    root.appendChild(route.component());
  }
}

navigateTo(window.location.pathname);

const gotoRegister = document.querySelector('a');
gotoRegister.addEventListener('click', ( ) {
  const route = routes.find((routeFound) => routeFound.path ==);
navigateTo(window.location.);

});


function signin() {
  const signinForm = document.querySelector('#signin_form');
  // console.log(signinForm);

  signinForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = signinForm.signin_email.value;
    const password = signinForm.signin_password.value;
    console.log(email, password);

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(userCredentials);
    } catch (error) {
      console.log(error.message);
      console.log(error.code);

      if (error.code === 'auth/email-already-in-use') {
        alert('El correo ya está registrado')
      } else if (error.code === 'auth/invalid-email') {
        alert('El correo que ingresaste es inválido');
      } else if (error.code === 'auth/weak-password') {
        alert('La contraseña que ingresaste es débil');
      } else if (error.code) {
        alert('Algo va mal')
      }
    }
  });
}

signin();


myFunction();

console.log(app);
console.log(analytics);
console.log(auth);
