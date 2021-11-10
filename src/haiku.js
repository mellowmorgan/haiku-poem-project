export class Haiku{
  constructor(chunk){
    this.linesArray=chunk.split(/[\n\r]+/);
  }
  checkLines(){
    if (this.linesArray.length===3){
      return true;
    }
    else{return false;}
  }
  checkSyllablesWord(word){
      word = word.toLowerCase();                                     //word.downcase!
      if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
        word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
        word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
        return word.match(/[aeiouy]{1,2}/g).length;                    //word.scan(/[aeiouy]{1,2}/).size
  }
    
  checkSyllablesLine(line){
    let getSyllablesCount=0;
    const arrayOfWords = line.split(" ");
    for (let i=0;i<arrayOfWords.length;i++){
      getSyllablesCount += this.checkSyllablesWord(arrayOfWords[i]);
    }
    return getSyllablesCount;
  }
} 