import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './src/exchange.js';

function exchangeShow(response, usd, currency) {
  if (response.result != 'success') {
    $('#exchangeShow').text(`Oopsie, there was an error! ${response.message}`);
  }else if (!currency) {
    $('#exchangeShow').text('Which currency would you like to exchange?');
  }else if (usd === '') {
    $('#exchangeShow').text('How much USD are you exchanging?');
  } else if (response.result === 'success') {
    $('#exchangeShow').text(`${usd} in ${currency}: ${response.conversion_rate*usd}`);
  } else {
    $('#exchangeShow').text(`Oopsie, there was an error!`);
  }
}

$(document).ready(function() {
  $('#submitMoney').click(function(event) {
    event.preventDefault();

    let usd = $('#usd').val();
    console.log(usd);
    $('#usd').val("");
    let currency = $('input:radio:checked').val();
    
  })
})