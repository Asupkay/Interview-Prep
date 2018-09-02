const findRectangles = (rectangle1, rectangle2) => {
  let xOverlap = findRangeOverlap(rectangle1.leftX, rectangle1.width, rectangle2.leftX, rectangle2.width);
  let yOverlap = findRangeOverlap(rectangle1.bottomY, rectangle1.height, rectangle2.bottomY, rectangle2.height);

  if(xOverlap.startPoint && yOverlap.startPoint) {
    return { leftX: xOverlap.startPoint, bottomY: yOverlap.startPoint, width: xOverlap.overlapLength, height: yOverlap.overlapLength };
  }
  return false;
}

const findRangeOverlap = (point1, length1, point2, length2) => {
  const highestStartPoint = Math.max(point1, point2);
  const lowestEndPoint = Math.min(point1 + length1, point2 + length2);

  if(highestStartPoint >= lowestEndPoint) {
    return { startPoint: null, overlapLength: null };
  }

  const overlapLength = lowestEndPoint - highestStartPoint;

  return { startPoint: highestStartPoint, overlapLength: overlapLength };
}
