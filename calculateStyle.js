const calculateStylePoints = (styleNotes) => {
  let note;
  if (isArray(styleNotes) === false || styleNotes.every(
    note > 20 || note < 0
  )) {
    return
  }
  const styleFilter = styleNotes.filter(
      note !== Math.min(styleNotes) && note !== Math.max(styleNotes)
    );
  const styleResult =  styleFilter.reduce(
      (a, b) => (a + b, 0)
    );
  return styleResult;
};

module.exports = calculateStylePoints;
