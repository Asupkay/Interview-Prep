const mergeRanges = (arrayOfTimes) => {
  //create a copy of the array of times
  let meetings = JSON.parse(JSON.stringify(arrayOfTimes));

  //Sort by the start time
  let sortedTimes = meetings.sort((a, b) => {return a.startTime - b.startTime})
  
  //Grab the first meeting and put it into its own array called merged meetings which will hold the final meeting schedule
  let mergedMeetings = [sortedTimes[0]];

  //Go from the second one and onward
  for(let i = 1; i < sortedTimes.length; i++) {

    //Grab the last merged meeting
    let lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    //If the end time of the last merged meeting is after the starttime of the meeting we are looking at merge the meetings else they do not overlap
    if(lastMergedMeeting.endTime >= sortedTimes[i].startTime) {
      lastMergedMeeting.endTime = Math.max(sortedTimes[i].endTime, lastMergedMeeting.endTime);
    } else {
      mergedMeetings.push(sortedTimes[i]);
    }
  }

  //Once merging is finished return it
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
