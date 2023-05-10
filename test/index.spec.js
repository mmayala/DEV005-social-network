/**
 * @jest-environment jsdom
 */

import { collection } from 'firebase/firestore';
import wall from '../src/components/muro.js';
import { deletePost } from '../src/firestore.js';
import { auth } from '../src/firebase.js';

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

// Test para cerrar sesión
describe('signOut', () => {
  test('Debería poder cerrar sesión', () => {
    const signOutMock = jest.fn();
    auth.signOut = signOutMock;
    const signOutBtn = document.querySelector('#signOutBtn');
    signOutBtn.click();
    expect(signOutMock).toHaveBeenCalledTimes(1);
  });
});
