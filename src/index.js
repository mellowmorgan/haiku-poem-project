import $ from 'jquery';
// import { Haiku } from './haiku.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$("form").submit(function(event){
  event.preventDefault();
  let result = $("textarea").val();
  result = result.split(/[\n\r]+/);
  console.log(result);

});