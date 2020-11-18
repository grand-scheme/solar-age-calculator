import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.css';
import './css/styles.css';
import Planets from './js/planets.js';

$(document).ready(function() {
  $("#age-input").submit(function(e) {
    e.preventDefault();
    const age      = $("#input").val();
    const mathTime = new Planets(age);
    const response = mathTime.PlanetaryMath();
    $("#output-text").show();
    $("#mercury-age").text(response.mercury.toFixed(2));
    $("#venus-age").text(response.venus.toFixed(2));
    $("#earth-age").text(response.earth.toFixed(2));
    $("#mars-age").text(response.mars.toFixed(2));
    $("#jupiter-age").text(response.jupiter.toFixed(2));
  });
});