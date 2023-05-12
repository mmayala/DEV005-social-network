/**
 * @jest-environment jsdom
 */

import { collection } from 'firebase/firestore';
import register from '../src/components/register.js';
import login from '../src/components/login.js';
import wall from '../src/components/muro.js';
import { deletePost } from '../src/firestore.js';

// Testea va al muro cuando se inicia sesión con Google
describe('Button Googlee', () => {
  test('login with google call function navigateTo', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(login(navigateTo('/muro')));
    const googleButton = DOM.querySelector('.btnGoogle');
    googleButton.click();
    expect(navigateTo).toHaveBeenCalledTimes(1);
  });
});

// Test funcion register
describe('register', () => {
  test('it should be a function', () => {
    expect(typeof register).toBe('function');
  });

  // Testea si cuando se da click en link vuelve a Iniciar Sesión
  test('going to login page', () => {
    const navigateTo = jest.fn();
    const divContainer = register(navigateTo);
    const link = divContainer.querySelector('.link');
    link.dispatchEvent(new Event('click'));
    expect(navigateTo).toHaveBeenCalledWith('/');
  });
});

// Test funcion wall
describe('wall', () => {
  test('it should be a function', () => {
    expect(typeof wall).toBe('function');
  });
});

// Test funcion eliminar post
describe('deletePost', () => {
  test('Debería poder eliminar una publicación', () => {
    deletePost('abc123456')
      .then(() => collection(
        (data) => {
          expect(data).toBe(undefined);
        },
      ));
  });
});
