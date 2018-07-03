const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let distancePoints;
  let meterPoints;
  let hillSizePoints;
  if (hillSize === 'flying') {
    hillSizePoints = 120;
    meterPoints = 1.2;
  } else if (hillSize === "large") {
    hillSizePoints = 60;
    meterPoints = 1.8;
  } else {
    hillSizePoints = 60;
    meterPoints = 2.0;
  }
  return distancePoints = (distance - kPoint) * meterPoints + hillSizePoints;
};

module.exports = calculateDistancePoints;
