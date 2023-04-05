function login() {
  const divLogin=document.createElement('div');
  const sectionLogo = document.createElement('section');
  const logo = document.createElement('img');
  const textWelcome = document.createElement('h3');
  logo.className = 'logoMobile';
  logo.src = '/img/logo.png';

  textWelcome.textContent = 'Aquí encontrarás opiniones y recomendaciones de las mejores películas';
  sectionLogo.append(logo, textWelcome);

  const sectionDatos = document.createElement('section');
  const email = document.createElement('input');
  const password = document.createElement('input');
  const btnLogin = document.createElement('button');
  const btnFacebook = document.createElement('img');
  const btnGoogle = document.createElement('img');
  const btnRegister = document.createElement('button');
  const formLogin=document.createElement('form');
  email.placeholder = 'Correo electrónico';
  password.placeholder = 'Contraseña';
  btnLogin.textContent = 'INICIAR SESIÓN';
  btnRegister.textContent = 'REGISTRARSE';
  btnFacebook.src ='/img/logo_facebook.png';
  btnGoogle.src ='/img/logo_google.png';
  btnFacebook.className ='btnRed';
  btnGoogle.className ='btnRed';
  password.type='password';
  email.type='email';
  btnLogin.type='submit';
  email.id='signin_email';
  password.id='signin_password';
  formLogin.id='signin_form';
  sectionLogo.className='sectionLogo';
  sectionDatos.className='sectionDatos';
  formLogin.append(email, password, btnLogin, btnFacebook, btnGoogle, btnRegister);
  sectionDatos.append(formLogin);
  divLogin.append(sectionLogo, sectionDatos);
  return divLogin;
}


export default login;

