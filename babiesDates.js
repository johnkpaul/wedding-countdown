var moment = require('moment');

var today = moment();
var babiesBirthday = moment('2018 02 08', 'YYYY MM DD');

var daysSinceBabiesBirthday = getDaysBetween(babiesBirthday, today);

function getDaysBetween(start, end){
  // start must be in a valid moment format, for example: '2015 12 04', 'YYYY MM DD'
  return end.diff(start, 'days');
}

module.exports = {
  daysSinceBabiesBirthday
};

