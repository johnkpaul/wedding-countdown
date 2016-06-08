var expect = require('chai').expect;
var countdown = require('./index');

describe("countdown message", function() {
  it("is a string with correctly interpolated variables", function() {
    var message = countdown.composeMessage({
      communallyMarriedFor: 4,
      legallyMarriedFor: 6,
      daysInCurrentTartSun: 10,
      tartSunNumber: 3
    });

    expect(message).to.contain('communally for 4');
    expect(message).to.contain('legally for 6');
    expect(message).to.contain('10th day');
    expect(message).to.contain('3rd tartsun');

    var message2 = countdown.composeMessage({
      communallyMarriedFor: 85,
      legallyMarriedFor: 1000,
      daysInCurrentTartSun: 23,
      tartSunNumber: 96
    });

    expect(message2).to.contain('communally for 85');
    expect(message2).to.contain('legally for 1000');
    expect(message2).to.contain('23rd day');
    expect(message2).to.contain('96th tartsun');
  });
});