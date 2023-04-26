/**
 * @jest-environment jsdom
 */

import register from '../src/components/register.js';
import login from '../src/components/login.js';

const mockRegister = () => {
  const container = document.createElement('section');
  const welcome = document.createElement('h2');
  welcome.textContent = 'Puedes registrarte';

  container.append(welcome);

  return container;
};

describe('register', () => {
  test('it should be a function', () => {
    expect(typeof register).toBe('function');
  });
  test('ejemplo', () => {
    // const DOM = document.createElement('div');
    document.body.innerHTML = '<div id="root"></div>';
    const DOM = document.getElementById('root');
    DOM.append(mockRegister());
    console.log('ver el DOM: ', DOM.textContent);
    // const haveabutton = DOM.querySelector('btn-Register');
    // console.log('****************', haveabutton);
    // expect(haveabutton).not.toBe(null);
  });
  test('xxxxxx', () => {
    // const DOM = document.createElement('div');
    document.body.innerHTML = '<div id="root"></div>';
    const DOM = document.getElementById('root');
    DOM.append(register());
    console.log('ver con Register: ', document.getElementById('btn-Register'));
    const haveabutton = document.getElementById('btn-Register');
    console.log('****************', haveabutton);
    expect(haveabutton).not.toBe(null);
  });
});

describe('Button Google', () => {
  test('login with google call function navigateTo', () => {
    const DOM = document.createElement('div');
    DOM.append(register());
    console.log('ver con Register: ', document.getElementById('btn-Register'));
    const haveabutton = document.getElementById('btn-Register');
    console.log('****************', haveabutton);
    expect(haveabutton).not.toBe(null);
  });
});

describe('Button Googlee', () => {
  test('login with google call function navigateTo', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(login(navigateTo));
    const googleButton = DOM.querySelector('#btnGoogle');
    googleButton.click();
    expect(navigateTo).toHaveBeenCalledTimes(0);
  });
});
