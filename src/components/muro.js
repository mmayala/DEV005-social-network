<<<<<<< HEAD
// import { signOut } from 'firebase/auth';
=======
import { signOut } from 'firebase/auth';
>>>>>>> 73d26a0bcffe4cd04e0391ab4432cb5ce86489ed
import { auth } from '../firebase.js';
import { addPost, paintRealTime } from '../lib/index';
import
{
  deletePost, getPost, updatePost, like, dislike,
} from '../firestore.js';

let editStatus = false;
let id = '';
let email = '';
const likess = '';

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
    addPost(comment.value, likess);
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
      likes.setAttribute('data-id', `${doc.id}`);
      if (doc.data().likes.includes(auth.currentUser.email)) {
        likes.className = 'bi bi-heart-fill btnlikes';
      } else {
        likes.className = 'bi bi-heart btnlikes';
      }

      const cantLikes = document.createElement('p');
      cantLikes.className = 'cantLikes';
      cantLikes.innerHTML = doc.data().likes.length;
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
        const btnEditTxt = postSection.querySelector(`.btnEdit[data-id="${doc.id}"]`);
        const post = doc.data();
        btnEditTxt.style.display = 'none';
        btnSaveEdit.style.display = 'block';
        paragraphPost.style.display = 'none';
        txtArea.value = post.comment;
        txtArea.style.display = 'block';
        editStatus = true;
        id = e.target.dataset.id;
<<<<<<< HEAD
=======

>>>>>>> 73d26a0bcffe4cd04e0391ab4432cb5ce86489ed
        // const txtArea = postSection.querySelector('.textAreaEdit');
        btnSaveEdit.addEventListener('click', () => {
          const comment = txtArea.value;
          if (!editStatus) {
            addPost(comment);
          } else {
            updatePost(id, { comment });
            editStatus = false;
          }
        });
      });
    });
    // LIKES
    const btnslikes = postSection.querySelectorAll('.btnlikes');

    btnslikes.forEach((btnlike) => {
      btnlike.addEventListener('click', async (e) => {
        id = e.target.dataset.id;
        const doc = await getPost(id);
        email = auth.currentUser.email;
        const ifLike = doc.data().likes;
        if (!ifLike.includes(email)) {
          like(id, email);
          // btnLikee.style.color = 'red';
        } else {
          dislike(id, email);
        }
      });
    });
  });
  signOutBtn.addEventListener('click', () => {
    auth.signOut();
  });
  return divWall;
}
export default wall;
