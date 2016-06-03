var client = require('./twilio');
var moment = require('moment');
var ordinal = require('number-to-words').toOrdinal;
var emoji = require('node-emoji');

var users = require('./config/secrets.js').users;
var honeyMoons = [];
var daysSinceCommunalWedding = -1 * daysUntil(2015, 12, 4);
var daysSinceLegalWedding = -1 * daysUntil(2015, 12, 2);
var daysInFirstTartSun = -1 * daysUntil(2015, 12, 13);

var today = moment();

var communal = today.diff(moment('2015 12 04', 'YYYY MM DD' ), 'days');
var legal = today.diff(moment('2015 12 02', 'YYYY MM DD' ), 'days');
var thirdTartSun = today.diff(moment('2016 4 26', 'YYYY MM DD' ), 'days');

var message = 'We\'ve been married communally for ' + communal + ' days, legally for ' + legal + ' days';

message += '\nand it\'s the ' + ordinal(thirdTartSun) + ' day of our third tartsun';
message += '\n'+ emoji.get('kissing_heart');

users.forEach(function(user){
  var to = user.phone_number;

  //console.log(message);
  client.send(to, message).then(function(message){
    console.log(JSON.stringify(message));
  });

});

function daysUntil(year, month, day) {
  var now = new Date(),
      dateEnd = new Date(year, month - 1, day), // months are zero-based
      days = (dateEnd - now) / 1000/60/60/24;   // convert milliseconds to days

  return Math.round(days);
}
