import { signOut } from 'firebase/auth';
import { auth } from '../firebase.js';
import { addPost, paintRealTime } from '../lib/index';

function wall(navigateTo) {
  const divWall = document.createElement('div');
  divWall.id = 'wallContainer';

  const navWall = document.createElement('nav');
  navWall.id = 'navWall';

  const signOutBtn = document.createElement('button');
  signOutBtn.textContent = 'Cerrar Sesión';
  signOutBtn.id = 'signOutBtn';

  const cineMatchtitle = document.createElement('h1');
  cineMatchtitle.textContent = 'CINE MATCH';
  cineMatchtitle.id = 'titleWall';

  const logo = document.createElement('img');
  logo.className = 'logoWall';
  logo.src = '/img/logo.png';

  navWall.append(logo, cineMatchtitle, signOutBtn);

  const sectionWall = document.createElement('section');
  const divCreatePost = document.createElement('div');
  const divImgComent = document.createElement('div');
  const imgPost = document.createElement('img');
  const txtPost = document.createElement('textarea');
  txtPost.placeholder = 'Escribe aquí el comentario sobre la película';
  txtPost.id = 'texPost';
  const buttonPost = document.createElement('button');
  buttonPost.textContent = 'Publicar';
  buttonPost.id = 'buttonPost';
  const postSection = document.createElement('article');
  postSection.className = 'postArticle';

  divImgComent.append(imgPost, txtPost);
  divCreatePost.append(divImgComent, buttonPost);

  sectionWall.append(divCreatePost, postSection);

  divWall.append(navWall, sectionWall);

  // Ajustar tamano de textarea para post
  /* const area = divWall.querySelectorAll('article');

  window.addEventListener('DOMContentLoaded', () => {
    area.forEach((elemento) => {
      elemento.style.height = `${elemento.scrollHeight}px`;
    });
  }); */

  // Evento para publicar Post
  divWall.querySelector('#buttonPost').addEventListener('click', () => {
    const comment = divWall.querySelector('#texPost');
    addPost(comment.value);
    comment.value = '';
    // console.log('comment');
  });

  // window.addEventListener('DOMContentLoaded', () => {
  // console.log(postSnapshot);
  paintRealTime((postSnapshot) => {
    postSection.textContent = '';
    postSnapshot.forEach((doc) => {
      // console.log('data:', doc.data());
      const post = document.createElement('p');
      post.readOnly = 'false';
      post.value = doc.data().comment;
      postSection.append(post);
    });
  });
  // });

  signOutBtn.addEventListener('click', async () => {
    await signOut(auth);
    // console.log('logOut');
    navigateTo('/');
  });

  return divWall;
}

export default wall;
