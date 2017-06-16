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