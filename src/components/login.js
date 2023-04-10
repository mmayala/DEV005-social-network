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
  const imgGoogle = document.createElement('img');
  const btnGoogle = document.createElement('button');
  const formLogin = document.createElement('form');
  const labelEmail=document.createElement('label');
  const labelPass=document.createElement('label');
  const register=document.createElement('p');
  const registerLink=document.createElement('a');
  const o=document.createElement('p');

  labelEmail.textContent='Correo electrónico';

  email.placeholder = 'Correo electrónico';
  email.type = 'email';
  email.id = 'signin_email';

  labelPass.textContent='Contraseña';

  password.placeholder = 'Contraseña';
  password.type='password';
  password.id='signin_password';

  btnLogin.textContent = 'INICIAR SESIÓN';
  btnLogin.type='submit';

  register.textContent='¿Todavía no tienes una cuenta?';
  registerLink.innerHTML='Registrate aquí';
  registerLink.href='#';
 
  register.appendChild(registerLink);

  o.textContent='o';

  
  imgGoogle.src ='/img/logo_google.png';
  btnGoogle.textContent = 'CONTINÚA CON GOOGLE';
  imgGoogle.className ='imgGoogle';
  btnGoogle.appendChild(imgGoogle);

  
  

  formLogin.id='signin_form';
  sectionLogo.className='sectionLogo';
  sectionDatos.className='sectionDatos';
  formLogin.append(labelEmail, email, labelPass, password, btnLogin, register, o, btnGoogle);
  sectionDatos.append(formLogin);
  divLogin.append(sectionLogo, sectionDatos);
  return divLogin;
}


export default login;

