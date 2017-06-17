(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function loadCurrencyData (cb) {
  $.when(
    $.ajax({
      type: 'GET',
      url: 'https://min-api.cryptocompare.com/data/price?fsym=HYP&tsyms=BTC,USD,EUR',
      crossDomain: true,
      dataType: 'text',
    }),
    $.ajax({
      type: 'GET',
      url: 'https://www.cryptocompare.com/api/data/price?fsym=HYP&tsyms=BTC',
      crossDomain: true,
      dataType: 'text',
    })
  ).done(function (currenciesData, hypBtcData) {
    currenciesData = JSON.parse(currenciesData.shift());
    hypBtcData = JSON.parse(hypBtcData.shift());

    var parsedData = {
      BTC: { value: currenciesData.BTC },
      USD: { value: currenciesData.USD },
      EUR: { value: currenciesData.EUR }
    };

    if (hypBtcData.Data && hypBtcData.Data.length > 0) {
      var btc = hypBtcData.Data[0];

      parsedData.BTC.diff = ((1 - (btc.Price / btc.Open24Hour)) * -100);
    }

    cb(null, parsedData);
  }).fail(function (err) {
    cb(err);
  });
}

function renderCurrencyValues () {
  var $el = $('.current-rates');

  loadCurrencyData(function (err, data) {
    if (err) {
      // Make the component invisible to the user
      $el.css({ visibility: 'hidden' });
      return;
    }

    $el.find('.btc .price').html(data.BTC.value.toFixed(8));
    $el.find('.change .percentage').html(data.BTC.diff.toFixed(2) + '%');

    var isUpOrDown = data.BTC.diff >= 0 ? 'up' : 'down';

    $el.find('.change').addClass(isUpOrDown);

    $el.find('.usd .price').html(data.USD.value);
    $el.find('.eur .price').html(data.EUR.value);

    $el.css({ visibility: 'visible' });
  });
}

$(document).ready(function () {
  renderCurrencyValues();
});
},{}],2:[function(require,module,exports){
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

},{}]},{},[2,1]);
