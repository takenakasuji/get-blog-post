// Load Modules
var client = require('cheerio-httpcli');
var twilio = require('twilio')('<ACCOUNT_SID>', '<AUTH_TOKEN>');
var querystring = require('querystring');

var url = '<TARGET_URL>'

// Start Scraping
client.fetch(url, {}, function (err, $, res) {
  $('.entry_author').each(function(idx) {
    var author = $(this).text();
    if (author == "OKB") {
      strike();
      return　false;
    }else if (author == "<NAME_PATTARN_A>") {
      strike();
      return false;
    }else if (author == "<NAME_PATTARN_B>") {
      strike();
      return false;
    }else if (author == "<NAME_PATTARN_C>") {
      strike();
      return false;
    }else if (author == "<NAME_PATTARN_D>") {
      strike();
      return false;
    }
  });
});

// Call to my iPhone
var message = "<MESSAGE>";
var xml = '<Response><Say voice="woman" language="ja-jp">' + message + '</Say></Response>';

function strike() {
  twilio.makeCall({
    to:'<MY_IPHONE_NUMBER>',
    from: '<TWILIO_NUMBER>',
    url: 'http://twimlets.com/echo?Twiml=' + querystring.escape(xml)
  }, function (err, responseData) {
    console.log(responseData.from);
  });
}
