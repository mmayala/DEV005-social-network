import { signOut } from 'firebase/auth';
import { auth } from '../firebase.js';

function wall(navigateTo) {
  const divWall = document.createElement('div');
  divWall.id = 'wallContainer';

  const signOutBtn = document.createElement('button');
  signOutBtn.textContent = 'Cerrar Sesión';
  signOutBtn.id = 'signOutBtn';

  divWall.append(signOutBtn);

  signOutBtn.addEventListener('click', async () => {
    await signOut(auth);
    // console.log('logOut');
    navigateTo('/');
  });

  return divWall;
}

export default wall;
