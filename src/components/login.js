function login() {
  const backgroundImage = document.createElement('img');
  backgroundImage.src = './img/fondo_desktop.png';
  backgroundImage.id = 'backgroundImage';

  const divLogin = document.createElement('div');

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

  const btnLogin = document.createElement('button');
  btnLogin.textContent = 'INICIAR SESIÓN';
  btnLogin.type = 'submit';

  const register = document.createElement('p');
  register.textContent = '¿Todavía no tienes una cuenta?   ';
  const registerLink = document.createElement('a');
  registerLink.innerHTML = 'Registrate aquí';
  registerLink.href = '#';
  register.appendChild(registerLink);

  const o = document.createElement('p');
  o.textContent = 'o';

  const imgGoogle = document.createElement('img');
  imgGoogle.src = '/img/logo_google.png';
  imgGoogle.className = 'imgGoogle';
  const btnGoogle = document.createElement('button');
  btnGoogle.textContent = 'CONTINÚA CON GOOGLE';
  btnGoogle.className = 'btnGoogle';
  btnGoogle.appendChild(imgGoogle);

  formLogin.append(
    labelEmail,
    email,
    labelPass,
    password,
    btnLogin,
    register,
    o,
    btnGoogle,
  );

  sectionDatos.append(formLogin);
  divLogin.append(backgroundImage, sectionLogo, sectionDatos);
  return divLogin;
}

export default login;
