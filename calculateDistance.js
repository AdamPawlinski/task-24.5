const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let distancePoints;
  let meterPoints;
  let hillSizePoints;
  if (hillSize = 'mammoth') {
    hillSizePoints = 120;
  } else {
    hillSizePoints = 60;
  }
  if (hillSize = "mammoth") {
    meterPoints = 1.2;
  } else if (hillSize = "large") {
    meterPoints = 1.8;
  } else {
    meterPoints = 2.0;
  }
  
  return distancePoints = (distance - kPoint) * meterPoints + hillSizePoints;
};

module.exports = calculateDistancePoints;
