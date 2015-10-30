var expect = require('chai').expect;
var _ = require('lodash');
var combinatorics = require('js-combinatorics');
var words = require('../index');

describe('wordlist', function() {
  it('should have 7776 entries', function() {
    expect(_.keys(words).length).to.equal(7776);
  });

  it('should have all possible 5-dice rolls', function() {
  	var cmb = combinatorics.baseN(['1', '2', '3', '4', '5', '6'], 5);
  	var cnt = 0;
  	while(dice = cmb.next()) {
  		diceStr = dice.join('');
  		expect(words[diceStr], "combination: " + diceStr).to.be.a('string');
  	}
  });

  it('should have unique words', function() {
  	var values = _.values(words);
  	var unique = _.uniq(values);
    expect(values.length).to.equal(_.uniq(values).length);
  });
});
