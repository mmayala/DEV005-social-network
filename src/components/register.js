import { createUserWithEmailAndPassword } from 'firebase/auth';
<<<<<<< HEAD
//  import { auth } from './firebase.js';
=======
>>>>>>> ffa720619b568fc29c23c9b5c28ccfb4e5350f9b
import { auth } from '../firebase.js';

function register(navigateTo) {
  const divRegister = document.createElement('div');
  divRegister.id = 'registerContainer';

  const sectionLogo = document.createElement('section');
  sectionLogo.className = 'sectionLogo';
  const logo = document.createElement('img');
  logo.className = 'logoMobile';
  logo.src = '/img/logo.png';
  const textWelcome = document.createElement('h3');
  textWelcome.textContent = 'Aquí encontrarás opiniones y recomendaciones de las mejores películas';
  sectionLogo.append(logo, textWelcome);

  const sectionDatos = document.createElement('section');
  sectionDatos.className = 'sectionDatos';
  const formRegister = document.createElement('form');
  formRegister.id = 'register_form';

  const labelName = document.createElement('label');
  labelName.textContent = 'Nombre y Apellido';
  const name = document.createElement('input');
  name.placeholder = 'Ana Martinez';
  name.type = 'text';
  name.id = 'register_name';

  const labelEmail = document.createElement('label');
  labelEmail.textContent = 'Correo electrónico';
  const email = document.createElement('input');
  email.placeholder = 'ejemplo@ejemplo.com';
  email.type = 'email';
  email.id = 'register_email';

  const labelPassword = document.createElement('label');
  labelPassword.textContent = 'Contraseña';
  const password = document.createElement('input');
  password.placeholder = '************';
  password.type = 'password';
  password.id = 'register_password';

  const labelConfirm = document.createElement('label');
  labelConfirm.textContent = 'Confirmar contraseña';
  const confirm = document.createElement('input');
  confirm.placeholder = '************';
  confirm.type = 'password';
  confirm.id = 'register_confirm';

  const spanMessage = document.createElement('span');
  spanMessage.id = 'messageError';
 
  const btnRegister = document.createElement('button');
  btnRegister.textContent = 'REGISTRARSE';
  btnRegister.type = 'submit';
  btnRegister.id = 'btn-Register';

  formRegister.append(
    labelName,
    name,
    labelEmail,
    email,
    labelPassword,
    password,
    labelConfirm,
    confirm,
    spanMessage,
    btnRegister,
  );

  sectionDatos.append(formRegister);
  divRegister.append(sectionLogo, sectionDatos);

  const signupForm = divRegister.querySelector('#register_form');
  // console.log(signupForm);
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // const nameInput = signupForm.register_name.value;
    const emailInput = signupForm.register_email.value;
    const passwordInput = signupForm.register_password.value;
    // const confirmPassInput = signupForm.register_confirm.value;
    // console.log(nameInput, emailInput, passwordInput, confirmPassInput);

    try {
      // const userCredentials =
      await createUserWithEmailAndPassword(
        auth,
        emailInput,
        passwordInput,
      );
      navigateTo('/wall');
      // console.log(userCredentials);
    } catch (error) {
      //  console.log(error.message);
      //  console.log(error.code);

      if (error.code === 'auth/email-already-in-use') {
        spanMessage.textContent = 'El correo ya está registrado';
      } else if (error.code === 'auth/invalid-email') {
        spanMessage.textContent = 'El correo que ingresaste es inválido';
      } else if (error.code === 'auth/weak-password') {
        spanMessage.textContent = 'La contraseña que ingresaste es débil';
      } else if (error.code) {
        spanMessage.textContent = 'Algo va mal';
      }
    }
  });

  return divRegister;
}

export default register;
