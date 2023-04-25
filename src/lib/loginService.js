import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.js';

export const signIn = function () {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const signInWithCredentials = async function (emailLogin, passwordLogin) {
  let result = false;
  let message = 'Algo va mal';
  try {
    await signInWithEmailAndPassword(auth, emailLogin, passwordLogin);
    // console.log(credentials);
    message = 'Has iniciado sesión correctamente';
    result = true;
  } catch (error) {
    // console.log(error.code);
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
};
