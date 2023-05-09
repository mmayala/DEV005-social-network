import { signOut } from 'firebase/auth';
import { async } from 'regenerator-runtime';
import { auth } from '../firebase.js';
import { addPost, paintRealTime } from '../lib/index';
import
{
  deletePost, getPost, updatePost, like, dislike,
} from '../firestore.js';

let editStatus = false;
let id = '';
let email = '';

function wall() {
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
  logo.src = '/img/logo.png';
  navWall.append(logo, cineMatchtitle, signOutBtn);
  const sectionWall = document.createElement('section');
  const divCreatePost = document.createElement('div');
  divCreatePost.className = 'toCreatePost';
  const divImgComent = document.createElement('div');
  const imgPost = document.createElement('img');
  const txtPost = document.createElement('textarea');
  txtPost.placeholder = 'Escribe aquí el comentario sobre la película';
  txtPost.id = 'textPost';
  const buttonPost = document.createElement('button');
  buttonPost.textContent = 'PUBLICAR';
  buttonPost.id = 'buttonPost';
  const postSection = document.createElement('article');
  postSection.className = 'postArticle';
  divImgComent.append(imgPost, txtPost);
  divCreatePost.append(divImgComent, buttonPost);
  sectionWall.append(divCreatePost, postSection);
  divWall.append(navWall, sectionWall);
  //
  divWall.querySelector('#buttonPost').addEventListener('click', () => {
    const comment = divWall.querySelector('#textPost');
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
      postComment.setAttribute('data-id', `${doc.id}`);
      const textArea = document.createElement('textarea');
      textArea.className = 'textAreaEdit';
      textArea.setAttribute('data-id', `${doc.id}`);
      textArea.style.display = 'none';
      const btnEdit = document.createElement('button');
      btnEdit.className = 'btnEdit';
      btnEdit.textContent = 'EDITAR';
      btnEdit.setAttribute('data-id', `${doc.id}`);
      const btnSave = document.createElement('button');
      btnSave.className = 'btnSave';
      btnSave.textContent = 'GUARDAR CAMBIOS';
      btnSave.style.display = 'none';
      btnSave.setAttribute('data-id', `${doc.id}`);
      const btnDelet = document.createElement('button');
      btnDelet.className = 'btnDelet';
      btnDelet.textContent = 'ELIMINAR';
      btnDelet.setAttribute('data-id', `${doc.id}`);

      const likes = document.createElement('i');
      likes.className = 'bi bi-heart-fill btnlikes';
      likes.setAttribute('data-id', `${doc.id}`);

      const cantLikes = document.createElement('p');
      cantLikes.className = 'cantLikes';
      cantLikes.setAttribute('data-id', `${doc.id}`);

      post.append(postComment, textArea, likes, cantLikes, btnEdit, btnSave, btnDelet);
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
      btnEdit.addEventListener('click', async (e) => {
        const doc = await getPost(e.target.dataset.id);
        const paragraphPost = postSection.querySelector(`.comment[data-id="${doc.id}"]`);
        const txtArea = postSection.querySelector(`.textAreaEdit[data-id="${doc.id}"]`);
        const btnSaveEdit = postSection.querySelector(`.btnSave[data-id="${doc.id}"]`);
        console.log(txtArea);
        const btnEditTxt = postSection.querySelector(`.btnEdit[data-id="${doc.id}"]`);
        const post = doc.data();
        btnEditTxt.style.display = 'none';
        btnSaveEdit.style.display = 'block';
        paragraphPost.style.display = 'none';
        txtArea.value = post.comment;
        txtArea.style.display = 'block';
        editStatus = true;
        id = e.target.dataset.id;
        console.log(id);

        // const txtArea = postSection.querySelector('.textAreaEdit');
        btnSaveEdit.addEventListener('click', () => {
          const comment = txtArea.value;
          if (!editStatus) {
            addPost(comment);
          } else {
            // console.log(id, 9989);
            // console.log(txtArea.value, 7787);
            updatePost(id, { comment });
            editStatus = false;
          }
        });
      });
    });
    // LIKES
    const btnslikes = postSection.querySelectorAll('.btnlikes');
    const contLike = function () {
      btnslikes.forEach(async(btnlike) => {
        const idLike = btnlike.dataset.id;
        const doc = await getPost(idLike);
        const cantidadLike = doc.data().likes.length;

        const cantLikes = postSection.querySelector(`.cantLikes[data-id="${doc.id}"]`);
        cantLikes.textContent = cantidadLike;
      });
      // console.log(doc);
    };

    contLike();

    btnslikes.forEach((btnlike) => {
      btnlike.addEventListener('click', async (e) => {
        const doc = await getPost(e.target.dataset.id);
        console.log(doc);
        const cantLikes = postSection.querySelector(`.cantLikes[data-id="${doc.id}"]`);
        console.log(cantLikes);
        const btnLikee = postSection.querySelector(`.btnlikes[data-id="${doc.id}"]`);
        console.log(btnLikee);
        id = e.target.dataset.id;
        console.log(id);
        email = auth.currentUser.email;
        console.log(email);
        const ifLike = doc.data().likes;
        console.log(ifLike);
        cantLikes.textContent = ifLike.length;
        console.log(cantLikes);
        if (!ifLike.includes(email)) {
          console.log(email);
          like(id, email);
          contLike();
          // btnLikee.style.color = 'red';
        } else {
          dislike(id, email);
        }
      });
    });
  });
  signOutBtn.addEventListener('click', async () => {
    await signOut(auth);
  });
  return divWall;
}
export default wall;
