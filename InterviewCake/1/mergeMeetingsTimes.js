const mergeRanges = (arrayOfTimes) => {
  let meetings = JSON.parse(JSON.stringify(arrayOfTimes));
  let sortedTimes = meetings.sort((a, b) => {return a.startTime - b.startTime})
  let mergedMeetings = [sortedTimes[0]];
  for(let i = 1; i < sortedTimes.length; i++) {
    let lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
    if(lastMergedMeeting.endTime >= sortedTimes[i].startTime) {
      lastMergedMeeting.endTime = Math.max(sortedTimes[i].endTime, lastMergedMeeting.endTime);
    } else {
      mergedMeetings.push(sortedTimes[i]);
    }
  }
  return mergedMeetings;
}

let times = [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 }
]

console.log(mergeRanges(times));
