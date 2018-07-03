const assert = require('assert');
const calculateTotalPoints = require('./calculateTotal');

describe('calculateTotalPoints', () => {
  describe('calculate total result on flying hill', () => {
      it('should return total points', () => {
        const actual = calculateTotalPoints(223, 'flying', 200, styleNotes[17.5, 18.5, 18.0, 18.5, 18.5], -7.6,  8.7);

        const expected = '203.7';

        assert.equal(actual, expected);
      });
  });
  describe('calculate total result on large hill', () => {
      it('should return total points with negative wind compensation', () => {
        const actual = calculateTotalPoints(115.5, 'large', 120, styleNotes[16.5, 16.0, 16.5, 17.0, 17.0], -0.4, 0);

        const expected = '101.5';

        assert.equal(actual, expected);
      });
      it('should return total points with positive wind compensation', () => {
        const actual = calculateTotalPoints(113, 'large', 120, styleNotes[16.0, 16.0, 16.0, 15.5, 16.5], 0.4, 0);

        const expected = '95.8';

        assert.equal(actual, expected);
      });
  });
  describe('calculate total result on normal hill', () => {
      it('should return total points', () => {
        const actual = calculateTotalPoints(90.0, 'normal', 98, styleNotes[16.5, 15.0, 15.5, 16.0, 16.0], -9.1, 0);

        const expected = '82.4';

        assert.equal(actual, expected);
      });
  });
});
