// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { app, analytics, auth} from './firebase.js';
import login from './components/login.js';
//import { signin } from './components/signin.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const root = document.getElementById('root');
root.append(login());


function signin() {
    const signinForm = document.querySelector('#signin_form');
    // console.log(signinForm);
  
    signinForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = signinForm.signin_email.value;
      const password = signinForm.signin_password.value;
      console.log(email, password);
  
      try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);
      } catch (error) {
        console.log(error);
      }
    });}

    signin();

myFunction();

console.log(app);
console.log(analytics);
console.log(auth);
