import { signIn, signInWithCredentials } from '../lib/loginservice.js';

function login(navigateTo) {
  const divLogin = document.createElement('div');
  divLogin.id = 'loginContainer';

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

  const formLogin = document.createElement('form');
  formLogin.id = 'signin_form';

  const labelEmail = document.createElement('label');
  labelEmail.textContent = 'Correo electrónico';

  const email = document.createElement('input');
  email.placeholder = 'ejemplo@ejemplo.com';
  email.type = 'email';
  email.id = 'signin_email';

  const labelPass = document.createElement('label');
  labelPass.textContent = 'Contraseña';

  const password = document.createElement('input');
  password.placeholder = '***************';
  password.type = 'password';
  password.id = 'signin_password';

  const spanMessage = document.createElement('span');
  spanMessage.id = 'messageError';

  const btnLogin = document.createElement('button');
  btnLogin.textContent = 'INICIAR SESIÓN';
  btnLogin.type = 'submit';
  btnLogin.id = 'btnLogin';

  const register = document.createElement('p');
  register.textContent = '¿No tienes una cuenta?   ';

  const registerLink = document.createElement('a');
  registerLink.innerHTML = 'Registrate aquí';
  registerLink.href = '';
  register.appendChild(registerLink);

  const o = document.createElement('p');
  o.textContent = 'o';

  const btnGoogle = document.createElement('div');
  btnGoogle.className = 'btnGoogle';
  btnGoogle.id = 'btnGoogle';

  const imgGoogle = document.createElement('img');
  imgGoogle.src = '/img/logo_google.png';
  imgGoogle.className = 'imgGoogle';

  const txtGoogle = document.createElement('span');
  txtGoogle.innerHTML = 'CONTINÚA CON GOOGLE';
  txtGoogle.id = 'continueWithGoogle';

  btnGoogle.append(imgGoogle, txtGoogle);

  formLogin.append(
    labelEmail,
    email,
    labelPass,
    password,
    spanMessage,
    btnLogin,
    register,
    o,
    btnGoogle,
  );

  sectionDatos.append(formLogin);
  divLogin.append(sectionLogo, sectionDatos);
  const gotoRegister = divLogin.querySelector('a');
  gotoRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  // Logearse con Google
  const googleBtn = divLogin.querySelector('.btnGoogle');
  // console.log(googleBtn);
  googleBtn.addEventListener('click', async () => {
    try {
      const credentials = await signIn();
      // console.log(credentials);
      navigateTo('/wall');
      document.write(`Bienvenido ${credentials.user.displayName}`);
    } catch (error) {
      //  console.log(error);
    }
  });

  // Logearse con correo y contraseña
  const signinLogin = divLogin.querySelector('#signin_form');
  signinLogin.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailLogin = signinLogin.signin_email.value;
    const passwordLogin = signinLogin.signin_password.value;

    const result = await signInWithCredentials(emailLogin, passwordLogin);

    spanMessage.textContent = result.message;

    if (result.ok) {
      navigateTo('/wall');
    }
  });

  return divLogin;
}

export default login;
