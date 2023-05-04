function error() {
  const messageError = document.createElement('h2');
  messageError.className = 'messageError';
  messageError.textContent = 'Error 404 page no found, please go home';
  return messageError;
}
export default error;
