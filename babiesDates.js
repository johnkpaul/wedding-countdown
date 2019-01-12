var moment = require('moment');
require("moment-precise-range-plugin");

var today = moment();
var babiesBirthday = moment('2018 02 08', 'YYYY MM DD');

moment.relativeTimeThreshold('s', 60);
moment.relativeTimeThreshold('m', 60);
moment.relativeTimeThreshold('h', 24);
moment.relativeTimeThreshold('d', 31);
moment.relativeTimeThreshold('M', 12);
moment.relativeTimeThreshold('y', 365);

var daysSinceBabiesBirthday = getDaysBetween(babiesBirthday, today);

function getDaysBetween(start, end){
  // start must be in a valid moment format, for example: '2015 12 04', 'YYYY MM DD'
  var daysInBetween = end.diff(start, 'days');
  var diff = end.preciseDiff(start);
  return daysInBetween + "\n" +diff.substr(0, diff.indexOf("days") + 4);
}

module.exports = {
  daysSinceBabiesBirthday
};

