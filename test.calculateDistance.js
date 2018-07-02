const assert = require('assert');
const calculateDistancePoints = require('./calculateDistance');

describe('calculateDistancePoints', () => {
  describe('distance on mammoth hill', () => {
      it('should calculate mammoth hill jump', () => {
        const actual = calculateDistancePoints(223, 'mammoth', 200);

        const expected = '147.6';

        assert.equal(actual, expected);
      });
      it('should calculate mammoth hill jump', () => {
        const actual = calculateDistancePoints(160.5, 'mammoth', 200);

        const expected = '72.6';

        assert.equal(actual, expected);
      });
  });
  describe('distance on large hill', () => {
    it('should calculate large hill jump', () => {
      const actual = calculateDistancePoints(132, 'large', 120);

      const expected = '81.6';

      assert.equal(actual, expected);
    });
    it('should calculate large hill jump', () => {
      const actual = calculateDistancePoints(111, 'large', 120);

      const expected = '43.8';

      assert.equal(actual, expected);
    });
  });
  describe('distance on normal hill', () => {
    it('should calculate normal hill jump', () => {
      const actual = calculateDistancePoints(103.5, 'normal', 98);

      const expected = '71.0';

      assert.equal(actual, expected);
    });
    it('should calculate normal hill jump', () => {
      const actual = calculateDistancePoints(85.5, 'normal', 98);

      const expected = '35.0';

      assert.equal(actual, expected);
    });
  });
});
