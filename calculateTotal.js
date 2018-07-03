const calculateDistancePoints = require('./calculateDistance');
const calculateStylePoints = require('./calculateStyle');
let windFactor;
let gateFactor;

// windFactor = windFactor.toFixed(2);
// gateFactor = gateFactor.toFixed(2);

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);

  return distancePoints + stylePoints + windFactor + gateFactor;
}

module.exports = calculateTotalPoints;
