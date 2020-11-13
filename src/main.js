import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.css';
import './css/styles.css';

$(document).ready(function() {
  $("#age-input").submit(function(e) {
    e.preventDefault();
    $("#output-text").text($("#input").val());
  });
});