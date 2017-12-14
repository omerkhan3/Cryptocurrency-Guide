$(document).ready(function() {
   $.ajax({
        url: "https://api.cryptonator.com/api/full/btc-usd"
    }).then(function(data) {
       console.log(data.ticker);
       $('.bitcoin-price').append(data.ticker.price);
       if (data.ticker.change > 0)
       {
        $('.bitcoin-price').addClass("positiveChange");
        var percentage = 100 * (1 - ((data.ticker.price - data.ticker.change) / data.ticker.price)) //Math.round(100 * (1 - (data.ticker.price / (data.ticker.price - data.ticker.change)))).toFixed(2) ;
        percentage = percentage.toFixed(2);
        $('.bitcoin-change').append('+' + percentage + '% ' +'/ last hr');
      }
       else
       {
        $('.bitcoin-price').addClass("negativeChange");
        var percentage = 100 * (1 - (data.ticker.price / (data.ticker.price - data.ticker.change))) //Math.round(100 * (1 - (data.ticker.price / (data.ticker.price - data.ticker.change)))).toFixed(2) ;
        percentage = percentage.toFixed(2);
        $('.bitcoin-change').append('-' + percentage + '% ' +'/ last hr');
      }
    });




	$.ajax({
        url: "https://api.cryptonator.com/api/full/eth-usd"
    }).then(function(data) {
       console.log(data.ticker);
       $('.ethereum-price').append(data.ticker.price);
       if (data.ticker.change > 0)
       {
        $('.ethereum-price').addClass("positiveChange");
        var percentage = 100 * (1 - ((data.ticker.price - data.ticker.change) / data.ticker.price)) //Math.round(100 * (1 - (data.ticker.price / (data.ticker.price - data.ticker.change)))).toFixed(2) ;
        percentage = percentage.toFixed(2);
        $('.ethereum-change').append('+' + percentage + '% ' +'/ last hr');

      }

       else
       {
        $('.ethereum-price').addClass("negativeChange");
         var percentage = 100 * (1 - (data.ticker.price / (data.ticker.price - data.ticker.change))) //Math.round(100 * (1 - (data.ticker.price / (data.ticker.price - data.ticker.change)))).toFixed(2) ;
        percentage = percentage.toFixed(2);
        $('.ethereum-change').append('-' + percentage + '% ' +'/ last hr');
      }
    });



  $.ajax({
        url: "https://api.cryptonator.com/api/full/ltc-usd"
    }).then(function(data) {
       console.log(data.ticker);
       $('.litecoin-price').append(data.ticker.price);
       if (data.ticker.change > 0)
       {
        $('.litecoin-price').addClass("positiveChange");
          var percentage = 100 * (1 - ((data.ticker.price - data.ticker.change) / data.ticker.price)) //Math.round(100 * (1 - (data.ticker.price / (data.ticker.price - data.ticker.change)))).toFixed(2) ;
        percentage = percentage.toFixed(2);
        $('.litecoin-change').append('+' + percentage + '% ' +'/ last hr');
        }
       else
       {
        $('.litecoin-price').addClass("negativeChange");
         var percentage = 100 * (1 - (data.ticker.price / (data.ticker.price - data.ticker.change))) //Math.round(100 * (1 - (data.ticker.price / (data.ticker.price - data.ticker.change)))).toFixed(2) ;
        percentage = percentage.toFixed(2);
        $('.litecoin-change').append('-' + percentage + '% ' +'/ last hr');
      }
    });
   
    

});