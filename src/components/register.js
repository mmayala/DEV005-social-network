function register() {
  const divRegister = document.createElement('div');

  const backgroundImg = document.createElement('img');
  backgroundImg.src = '/img/fondo_desktop.png';
  backgroundImg.id = 'backgroundImg';

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

  const btnRegister = document.createElement('button');
  btnRegister.textContent = 'REGISTRARSE';
  btnRegister.type = 'submit';

  formRegister.append(
    labelName,
    name,
    labelEmail,
    email,
    labelPassword,
    password,
    labelConfirm,
    confirm,
    btnRegister,

  );

  sectionDatos.append(formRegister);
  divRegister.append(backgroundImg, sectionLogo, sectionDatos);
  return divRegister;
}

export default register;
