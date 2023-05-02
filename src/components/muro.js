import { signOut } from 'firebase/auth';
import { auth } from '../firebase.js';
import { addPost, paintRealTime } from '../lib/index';
import { detelePost } from '../firestore.js';

function wall(navigateTo) {
  const divWall = document.createElement('div');
  divWall.id = 'wallContainer';

  const navWall = document.createElement('nav');
  navWall.id = 'navWall';

  const signOutBtn = document.createElement('button');
  signOutBtn.textContent = 'CERRAR SESIÓN';
  signOutBtn.id = 'signOutBtn';

  const cineMatchtitle = document.createElement('h1');
  cineMatchtitle.textContent = 'CINE MATCH';
  cineMatchtitle.id = 'titleWall';

  const logo = document.createElement('img');
  logo.className = 'logoWall';
  logo.src = '/img/logopost.png';

  navWall.append(logo, cineMatchtitle, signOutBtn);

  const sectionWall = document.createElement('section');
  sectionWall.id = 'sectionWall';

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

  //
  divWall.querySelector('#buttonPost').addEventListener('click', () => {
    const comment = divWall.querySelector('#texPost');
    addPost(comment.value);
    comment.value = '';
  });

  paintRealTime((postSnapshot) => {
    postSection.textContent = '';
    let nameClass = 0;
    postSnapshot.forEach((doc) => {
      nameClass += 1;
      // console.log('data:', doc.data());
      const post = document.createElement('div');
      post.innerHTML = doc.data().comment;
      post.className = `createdPost${nameClass}`;

      const btnEdit = document.createElement('button');
      btnEdit.className = `btnEdit${nameClass}`;
      btnEdit.textContent = 'Editar';

      const btnDelet = document.createElement('button');
      btnDelet.className = 'btnDelet';
      btnDelet.textContent = 'Eliminar';
      btnDelet.setAttribute('data-id', `${doc.id}`);

      postSection.append(post, btnEdit, btnDelet);
    });
  });

  const btnsDelete = postSection.querySelectorAll('.btnDelet');
  btnsDelete.forEach(btn =>{
    btnsDelete.addEventListener('click', (e) => {}
  )};
  

  signOutBtn.addEventListener('click', async () => {
    await signOut(auth);
    navigateTo('/');
  });

  return divWall;
}
export default wall;
