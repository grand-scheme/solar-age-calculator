import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.css';
import './css/styles.css';
import Mercury from './js/mercury.js';

$(document).ready(function() {
  $("#age-input").submit(function(e) {
    e.preventDefault();
    const age = $("#input").val();
    const mercury = new Mercury(age);
    const response = mercury.calculateAge();
    $("#output-text").text(response);
  });
});