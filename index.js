var client =  require('./twilio');
var moment =  require('moment');
var ordinal = require('number-to-words').toOrdinal;
var emoji =   require('node-emoji');
var dates =   require('./weddingDates');
var babiesDates =   require('./babiesDates');
var users =   require('./config/secrets.js').users;

function composeMessage(opts) {
  var communallyMarriedFor = opts.communallyMarriedFor;
  var legallyMarriedFor = opts.legallyMarriedFor;
  var daysInCurrentTartSun = opts.daysInCurrentTartSun;
  var tartSunNumber = opts.tartSunNumber;

  var marriagesCounts = 'We\'ve been married communally for ' + communallyMarriedFor + ' days, legally for ' + legallyMarriedFor + ' days';
  var babiesDaysCount = '\nand we\'ve had 3 babies for ' + babiesDates.daysSinceBabiesBirthday + ' days\n';
  var kissyFace = emoji.get('kissing_heart') + ' ' + emoji.get('baby');

  return marriagesCounts + babiesDaysCount + kissyFace + kissyFace + kissyFace;
}

var messageOptionsObject = { 
  communallyMarriedFor: dates.daysSinceCommunalWedding, 
  legallyMarriedFor: dates.daysSinceLegalWedding, 
  daysInCurrentTartSun: dates.daysInCurrentTartSun, 
  tartSunNumber: dates.numberOfTartSuns
};

users.forEach(function(user){
  var to = user.phone_number;
  var message = composeMessage(messageOptionsObject);

  //console.log(message);
  client.send(to, message).then(function(message){
    console.log(JSON.stringify(message));
  });

});

module.exports = { composeMessage };
