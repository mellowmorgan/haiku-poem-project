import { Haiku } from './../src/haiku.js';

describe('Haiku', () => {

  test('should correctly create a haiku object from a chunk of text and make array of lines', (chunk) => {
    const chunk = 
    `i like haikus
    i like you
    no i don't`;
    expect(this.linesArray.length).toEqual(3);
  });
});