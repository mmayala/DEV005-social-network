/* eslint-disable func-names */
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.js';

export function signIn() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

export async function signInWithCredentials(emailLogin, passwordLogin) {
  let result = false;
  let message = 'Algo va mal';
  try {
    await signInWithEmailAndPassword(auth, emailLogin, passwordLogin);
    message = 'Has iniciado sesión correctamente';
    result = true;
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      message = 'La contraseña que ingresaste es incorrecta';
    } else if (error.code === 'auth/user-not-found') {
      message = 'El correo que ingresaste es inválido';
    }
  }
  return {
    ok: result,
    message,
  };
}
