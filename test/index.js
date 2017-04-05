'use strict';

const expect = require('chai').expect;
const _ = require('lodash');
const combinatorics = require('js-combinatorics');
const words = require('../index');

describe('wordlist', function() {
  it('should have 7776 entries', function() {
    expect(_.keys(words).length).to.equal(7776);
  });

  it('should have all possible 5-dice rolls', function() {
    const cmb = combinatorics.baseN(['1', '2', '3', '4', '5', '6'], 5);
    while(true) { // eslint-disable-line
      let dice = cmb.next();
      if (typeof dice === 'undefined') break;
      let diceStr = dice.join('');
      expect(words[diceStr], 'combination: ' + diceStr).to.be.a('string');
    }
  });

  it('should have unique words', function() {
    const values = _.values(words);
    expect(values.length).to.equal(_.uniq(values).length);
  });
});
