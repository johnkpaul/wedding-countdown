var client = require('./twilio');

var users = require('./config/secrets.js').users;
var daysUntilWedding = daysUntil(2015, 12, 4);

users.forEach(function(user){
  var to = user.phone_number;

  client.send(to, daysUntilWedding + " days until our wedding!").then(function(message){
    console.log(JSON.stringify(message));
  });

});

function daysUntil(year, month, day) {
  var now = new Date(),
      dateEnd = new Date(year, month - 1, day), // months are zero-based
      days = (dateEnd - now) / 1000/60/60/24;   // convert milliseconds to days

  return Math.round(days);
}
