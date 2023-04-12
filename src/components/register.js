function register() {
  const divLogin = document.createElement('div');

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

  divLogin.append(backgroundImg, sectionLogo);
  return divLogin;
}

export default register;
