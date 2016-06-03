var dates =  require('./weddingDates');
var expect = require('chai').expect;
var moment = require('moment');

describe("getDaysBetween", function() {
  it("calculates the number of days between 2 dates", function() {
    var weddingDay = moment('2016 06 01', 'YYYY MM DD');
    var twoDaysLater = moment('2016 06 03', 'YYYY MM DD');
    var days = dates.getDaysBetween(weddingDay, twoDaysLater);

    expect(days).to.equal(2);
  });
});