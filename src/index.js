import $ from 'jquery';
import { Haiku } from './haiku.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$("form").submit(function(event){
  
  let haiku;
  event.preventDefault();
  
  let result = $("textarea").val();
  haiku = new Haiku(result);
  const bool = haiku.checkHaiku();
  if (bool){$("#result").html("This is a haiku!")}
  else{$("#result").html("This is NOT a haiku!")}
  $("#counts").append("<p>Line 1 syllables: "+haiku.checkSyllablesLine(haiku.linesArray[0])+"</p>");
  $("#counts").append("<p>Line 2 syllables: "+haiku.checkSyllablesLine(haiku.linesArray[1])+"</p>");
  $("#counts").append("<p>Line 3 syllables: "+haiku.checkSyllablesLine(haiku.linesArray[2])+"</p>");


});