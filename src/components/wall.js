import { signOut } from 'firebase/auth';
import { auth } from '../firebase.js';
// import { addPost } from '../main.js';

function wall(navigateTo) {
  const divWall = document.createElement('div');
  divWall.id = 'wallContainer';

  const navWall = document.createElement('nav');

  const signOutBtn = document.createElement('button');
  signOutBtn.textContent = 'Cerrar Sesión';
  signOutBtn.id = 'signOutBtn';

  navWall.append(signOutBtn);

  const sectionWall = document.createElement('section');
  const divCreatePost = document.createElement('div');
  const divImgComent = document.createElement('div');
  const imgPost = document.createElement('img');
  const txtPost = document.createElement('textarea');
  txtPost.placeholder = 'Escribe aquí el comentario sobre la película';
  txtPost.id = 'commentPost';
  const buttonPost = document.createElement('button');
  buttonPost.textContent = 'Publicar';
  buttonPost.id = 'buttonPost';

  divImgComent.append(imgPost, txtPost);
  divCreatePost.append(divImgComent, buttonPost);

  sectionWall.appendChild(divCreatePost);

  divWall.append(navWall, sectionWall);

// Evento que cierra sesión
  signOutBtn.addEventListener('click', async () => {
    await signOut(auth);
    navigateTo('/');
  });

  return divWall;
}

export default wall;
