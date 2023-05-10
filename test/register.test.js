/**
 * @jest-environment jsdom
 */
import register from '../src/components/register.js';

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
