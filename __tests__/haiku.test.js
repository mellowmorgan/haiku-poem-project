import { Haiku } from './../src/haiku.js';

describe('Haiku', () => {

  let haiku;

  beforeEach(() => {
    const chunk = 
    `i like haikus
    i like you
    no i don't`;
    haiku = new Haiku(chunk);
  });

  test('should correctly create a haiku object from a chunk of text and make array of lines', () => {
    expect(haiku.linesArray.length).toEqual(3);
  });
  test('should return true if array of lines has 3 elements', () => {
    expect(haiku.checkLines()).toEqual(true);
  });
});