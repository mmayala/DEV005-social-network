/**
 * @jest-environment jsdom
 */

import register from '../src/components/register.js';
import login from '../src/components/login.js';

describe('register', () => {
  test('it should be a function', () => {
    expect(typeof register).toBe('function');
  });

  test('have a button', () => {
    const DOM = document.createElement('div');
    DOM.append(register());
    const haveabutton = DOM.querySelector('btn-Register');
    expect(haveabutton).not.toBe(undefined);
  });
});

describe('Button Google', () => {
  test('login with google call function navigateTo', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(login(navigateTo));
    const googleButton = DOM.querySelector('#btnGoogle');
    googleButton.click();
    expect(navigateTo).toHaveBeenCalledTimes(0);
  });
});
