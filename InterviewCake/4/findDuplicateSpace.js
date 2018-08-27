const findDuplicate = (arrayOfNums) => {
  let floor = 1;
  let ceiling = arrayOfNums.length - 1;

  while(floor < ceiling) {
    let midpoint = Math.floor((ceiling- floor)/2) + floor;
    let lowerRangeFloor = floor;
    let lowerRangeCeiling = midpoint;
    let upperRangeFloor = midpoint + 1;
    let upperRangeCeiling = ceiling;

    let distinctPossibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;

    let itemsInLowerRange = 0;
    arrayOfNums.forEach((item) => {
      if(item >= lowerRangeFloor && item <= lowerRangeCeiling) {
        itemsInLowerRange++;
      }
    });

    if(itemsInLowerRange > distinctPossibleIntegersInLowerRange) {
      floor = lowerRangeFloor;
      ceiling = lowerRangeCeiling;
    } else {
      floor = upperRangeFloor;
      ceiling = upperRangeCeiling
    }
  }
  return floor;
}

console.log(findDuplicate([1,2,3,4,5,6,7,5]));
