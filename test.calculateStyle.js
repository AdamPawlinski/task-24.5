const assert = require('assert');
const calculateStylePoints = require('./calculateStyle');
// let styleNotes = [];

describe('calculateStylePoints', () => {
  it('should return style note', () => {
    let styleNotes = [18.0, 18.5, 17.5, 18.5, 18.5];
    const actual = calculateStylePoints(styleNotes);

    const expected = '55';

    assert.equal(actual, expected);
  });
  it('should return style note', () => {
    let styleNotes = [19.0, 19.5, 19.0, 19.0, 19.0];
    const actual = calculateStylePoints(styleNotes);

    const expected = '57';

    assert.equal(actual, expected);
  });
  it('should return style note', () => {
    let styleNotes = [18.0, 20.0, 19.5, 19.0, 18.5];
    const actual = calculateStylePoints(styleNotes);

    const expected = '57';

    assert.equal(actual, expected);
  });
});
