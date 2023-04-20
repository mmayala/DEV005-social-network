/**
 * @jest-environment jsdom
 */

import register from '../src/components/register.js';

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

