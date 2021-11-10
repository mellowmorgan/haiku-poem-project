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
  checkSyllables(line){
    if (line.length<=3){
      return 1;
    }
  }
}