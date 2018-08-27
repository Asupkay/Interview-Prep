const mergeMeetings = (meetings) => {
  meetings.sort((a,b) => {return a.startTime - b.startTime})
  let mergedMeetings = [meetings[0]];
  let lastMeeting = 0;
  for(let i = 1; i < meetings.length; i++) {
    if(mergedMeetings[lastMeeting].endTime >= meetings[i].startTime) {
      if(meetings[i].endTime > mergedMeetings[lastMeeting].endTime) {
        mergedMeetings[lastMeeting].endTime = meetings[i].endTime;
      }
    } else {
      mergedMeetings.push(meetings[i]);
      lastMeeting++;
    }
  }
  return mergedMeetings;
}

console.log(mergeMeetings(  [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]));
