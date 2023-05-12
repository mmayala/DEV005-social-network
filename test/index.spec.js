/**
 * @jest-environment jsdom
 */

import { collection } from 'firebase/firestore';
import wall from '../src/components/muro.js';
import { deletePost } from '../src/firestore.js';
import register from '../src/components/register.js';
import login from '../src/components/login.js';

// import { auth } from '../src/firebase.js';

// const mockRegister = () => {
//   const container = document.createElement('section');
//   const welcome = document.createElement('h2');
//   welcome.textContent = 'Puedes registrarte';

//   container.append(welcome);

//   return container;
// };

// describe('register', () => {
//   test('it should be a function', () => {
//     expect(typeof register).toBe('function');
//   });
//   test('ejemplo', () => {
//     // const DOM = document.createElement('div');
//     document.body.innerHTML = '<div id="root"></div>';
//     const DOM = document.getElementById('root');
//     DOM.append(mockRegister());
//     // console.log('ver el DOM: ', DOM.textContent);
//     // const haveabutton = DOM.querySelector('btn-Register');
//     // console.log('****************', haveabutton);
//     // expect(haveabutton).not.toBe(null);
//   });
test('xxxxxx', () => {
  // const DOM = document.createElement('div');
  document.body.innerHTML = '<div id="root"></div>';
  const DOM = document.getElementById('root');
  DOM.append(register());
  // console.log('ver con Register: ', document.getElementById('btn-Register'));
  const haveabutton = document.getElementById('btn-Register');
  // console.log('****************', haveabutton);
  expect(haveabutton).not.toBe(null);
});
// });

// describe('Button Google', () => {
//   test('login with google call function navigateTo', () => {
//     const DOM = document.createElement('div');
//     DOM.append(register());
//     // console.log('ver con Register: ', document.getElementById('btn-Register'));
//     const haveabutton = document.getElementById('btn-Register');
//     // console.log('****************', haveabutton);
//     expect(haveabutton).not.toBe(null);
//   });
// });

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

// describe('Go to register', () => {
//   test('got to register call function navigateTo', () => {
//     const DOM = document.createElement('div');
//     const navigateTo = jest.fn();

//     DOM.append(login(navigateTo('/register')));
//     const goToRegister = DOM.querySelector('a');
//     goToRegister.click();
//     expect(navigateTo).toHaveBeenCalledTimes(1);
//   });
// });

describe('register', () => {
  test('it should be a function', () => {
    expect(typeof register).toBe('function');
  });
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

// Test para cerrar sesión
/* describe('signOut', () => {
  test('Debería poder cerrar sesión', async () => {
    const signOutMock = jest.fn();
    auth.signOut = signOutMock;
    const signOutBtn = document.querySelector('#signOutBtn');
    signOutBtn.click();
    expect(signOutMock).toHaveBeenCalledTimes(1);
  });
});

*/
