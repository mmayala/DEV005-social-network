import { signOut } from 'firebase/auth';
import { auth } from '../firebase.js';
import { addPost, paintRealTime } from '../lib/index';
import { deletePost } from '../firestore.js';

function wall() {
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

  //
  divWall.querySelector('#buttonPost').addEventListener('click', () => {
    const comment = divWall.querySelector('#texPost');
    addPost(comment.value);
    comment.value = '';
  });
  paintRealTime((postSnapshot) => {
    postSection.textContent = '';
    postSnapshot.forEach((doc) => {
      const post = document.createElement('div');
      post.className = 'createdPost';

      const postComment = document.createElement('p');
      postComment.innerHTML = doc.data().comment;
      postComment.className = 'comment';

      const btnEdit = document.createElement('button');
      btnEdit.className = 'btnEdit';
      btnEdit.textContent = 'Editar';
      btnEdit.setAttribute('data-id', `${doc.id}`);

      const btnSave = document.createElement('button');
      btnSave.className = 'btnSave';
      btnSave.textContent = 'Guardar cambios';
      btnSave.style.display = 'none';
      btnSave.setAttribute('data-id', `${doc.id}`);

      const btnDelet = document.createElement('button');
      btnDelet.className = 'btnDelet';
      btnDelet.textContent = 'Eliminar';
      btnDelet.setAttribute('data-id', `${doc.id}`);

      post.append(postComment, btnEdit, btnSave, btnDelet);

      postSection.append(post);
    });
    // Delete post
    const btnsDelete = postSection.querySelectorAll('.btnDelet');
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        deletePost(e.target.dataset.id);
      });
    });
    // Edit Post
    const btnsEdit = postSection.querySelectorAll('.btnEdit');
    btnsEdit.forEach((btnEdit) => {
      btnEdit.addEventListener('click', (e) => {
        console.log(e.target.dataset.id);
      });
    });
  });

  signOutBtn.addEventListener('click', async () => {
    await signOut(auth);
  });

  return divWall;
}
export default wall;
