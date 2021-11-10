import $ from 'jquery';
import { Haiku } from './haiku.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$("form").submit(function(event){
  event.preventDefault();
  let result = $("textarea").val();
  result = result.split(/[\n\r]+/);
  console.log(result);

});
const chunk=`i
i like you
i am baby`;

let haiku = new Haiku(chunk);
console.log(haiku.linesArray);
console.log(haiku.linesArray[2]);
const babyWord = haiku.checkSyllablesWord("baby");
console.log("Baby is this many syllables: " + babyWord);
console.log(haiku.checkSyllablesLine(haiku.linesArray[2]));