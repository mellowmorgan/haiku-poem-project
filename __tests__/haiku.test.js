import { Haiku } from './../src/haiku.js';

describe('Haiku', () => {

  let haiku;

  beforeEach(() => {
    const chunk=`i
i like you
i am baby`; 
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
  test('should return "i am baby" when linesArray(2) is called', () => {
    expect(haiku.linesArray[2]).toEqual("i am baby");
  });
  test('should return 4 for a line with 4 syllables when checkSyllablesLine(line) called', () => {
    expect(haiku.checkSyllablesLine(haiku.linesArray[2])).toEqual(4);
  });
  test('should return false for chunk when checkHaiku() is called', () => {
    expect(haiku.checkHaiku()).toEqual(false);
  });
  test('should return true for new chunk when checkHaiku() is called', () => {
    const newChunk =`I am a commie
Jeff thinks I like Trump alot
I am mad at Jeff`
    let newHaiku = new Haiku(newChunk);
    expect(newHaiku.checkHaiku()).toEqual(true);
  });
});