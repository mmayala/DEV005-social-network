/**
 * @jest-environment jsdom
 */
import { addPost } from '../src/lib/index';
import wall from '../src/components/muro.js';

describe('muro', () => {
  it('test_add_post', () => {
    // Arrange
    const comment = 'Test comment';
    const addPostMock = jest.spyOn(addPost, 'addPost');
    const wallElement = wall();
    const commentInput = wallElement.querySelector('#textPost');
    const publishButton = wallElement.querySelector('#buttonPost');

    // Act
    commentInput.value = comment;
    publishButton.click();

    // Assert
    expect(addPostMock).toHaveBeenCalledWith(comment, '');
  });
});
