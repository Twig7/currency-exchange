import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './src/exchange.js';

function exchangeShow(response, usd, currency) {
  if (response.result != 'success') {
    $('#exchangeShow').text(`Oopsie, there was an error! ${response.message}`);
  }
  else if (!currency) {
    $('#exchangeShow').text('Which currency would you like to exchange?');
  }
}