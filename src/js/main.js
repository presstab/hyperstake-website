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
    // var isUpOrDown = data.BTC.diff >= 0 ? 'down' : 'up';

    $el.find('.change').addClass(isUpOrDown);

    $el.find('.usd .price').html(data.USD.value);
    $el.find('.eur .price').html(data.EUR.value);

    $el.css({ visibility: 'visible' });
  });
}

$(document).ready(function () {
  renderCurrencyValues();
});