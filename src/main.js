import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.css';
import './css/styles.css';
import Planets from './js/planets.js';
import LifeExpectancy from './js/life-expectancy.js';

$(document).ready(function() {
  $("#age-input").submit(function(e) {
    e.preventDefault();
    const age      = $("#input").val();

    const orbitCount = new Planets(age);
    const orbits = orbitCount.PlanetaryMath();
    
    const earthYearCount = new LifeExpectancy(age);
    const earthYearsRemaining = earthYearCount.TickTock();
    const solarDeath = new Planets(earthYearsRemaining)

    $("#output-text").show();

    $("#mercury-age").text(orbits.mercury.toFixed(2));
    $("#time-on-mercury").text(solarDeath.mercury.toFixed(2));

    $("#venus-age").text(orbits.venus.toFixed(2));
    $("#time-on-venus").text(solarDeath.venus.toFixed(2));

    $("#earth-age").text(orbits.earth.toFixed(2));
    $("#time-on-earth").text(solarDeath.earth);

    $("#mars-age").text(orbits.mars.toFixed(2));
    $("#time-on-mars").text(solarDeath.mars.toFixed(2));

    $("#jupiter-age").text(orbits.jupiter.toFixed(2));
    $("#time-on-jupiter").text(solarDeath.jupiter.toFixed(2));
  });
});