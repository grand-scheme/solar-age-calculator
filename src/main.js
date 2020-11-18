import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.css';
import './css/styles.css';
import Planets from './js/planets.js';

$(document).ready(function() {
  $("#age-input").submit(function(e) {
    e.preventDefault();
    const age = $("#input").val();
    const mathTime = new Planets(age);
    const response = mathTime.PlanetaryMath();
    $("#output-text").text(response);
  });
});