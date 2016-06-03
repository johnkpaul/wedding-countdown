var moment = require('moment');

var today = moment();
var communalWeddingDay = moment('2015 12 04', 'YYYY MM DD');
var legalWeddingDay = moment('2015 12 02', 'YYYY MM DD' );
var currentTartSunEndDate = moment('2016 4 26', 'YYYY MM DD' );
var numberOfTartSuns = 3;

var daysSinceCommunalWedding = getDaysBetween(communalWeddingDay, today);
var daysSinceLegalWedding = getDaysBetween(legalWeddingDay, today);
var daysInCurrentTartSun = getDaysBetween(today, currentTartSunEndDate)

function getDaysBetween(start, end){
  // start must be in a valid moment format, for example: '2015 12 04', 'YYYY MM DD'
  return end.diff(start, 'days');
}

module.exports = {
  daysSinceCommunalWedding,
  daysSinceLegalWedding,
  daysInCurrentTartSun,
  numberOfTartSuns,
  getDaysBetween
};