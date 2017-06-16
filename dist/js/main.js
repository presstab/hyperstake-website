(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function renderCurrencyValues () {
  var $el = $('.current-rates');
}

$(document).ready(function () {
  // $.when(
  //   $.getJSON(
  //     'http://min-api.cryptocompare.com/data/price?fsym=HYP&tsyms=BTC,USD,EUR&callback=?'
  //   ),
  //   $.getJSON(
  //     'http://www.cryptocompare.com/api/data/price?fsym=HYP&tsyms=BTC&callback=?'
  //   )
  // ).done(function (hypPrices, hypExtraData) {
  //   console.log(hypPrices);
  // }).fail(function (err) {
  //   console.error(err);
  // });

  $.ajax({
    url: 'http://min-api.cryptocompare.com/data/price?fsym=HYP&tsyms=BTC,USD,EUR',
    crossDomain: true,
    dataType: 'jsonp'
  }).done(function (hyp) {
  }).fail(function (err) {
  })
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
