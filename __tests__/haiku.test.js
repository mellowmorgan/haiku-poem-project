import { Haiku } from './../src/haiku.js';

describe('Haiku', () => {

  let haiku;

  beforeEach(() => {
    const chunk = 
    `i
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
  test('should return false if array of lines has not 3 elements', () => {
    const newChunk =  
    `i like haikus
    i like you
    no i don't
    haha psyche`;
    const notHaiku = new Haiku(newChunk);
    expect(notHaiku.checkLines()).toEqual(false);
  });
  test('should return 1 for word with 3 or less characters of when checkSyllablesWord(word) called', () => {
    expect(haiku.checkSyllablesWord("i")).toEqual(1);
  });
  test('should return 1 for line with one word with 3 or less characters of when checkSyllablesLine(line) called', () => {
    expect(haiku.checkSyllablesLine(haiku.linesArray[0])).toEqual(1);
  });


});