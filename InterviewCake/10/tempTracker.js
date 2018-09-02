class TempTracker {

  constructor() {
    this.temps = [];
    this.highestTemp = null;
    this.lowestTemp = null;
    this.totalTemp = 0;
    this.numTemps = 0;
    this.occurences = {}
    this.mostOccurences = 0;
    this.mode = null;
  }

  insert(value) {
    if(!this.highestTemp || value > this.highestTemp) {
      this.highestTemp = value;
    }
    if(!this.lowestTemp || value < this.lowestTemp) {
      this.lowestTemp = value;
    }
    this.totalTemp += value;
    this.numTemps++;
    this.temps.push(value);
    if(this.occurences[value]) {
      this.occurences[value]++;
    } else {
      this.occurences[value] = 1;
    }
    if(this.occurences[value] > mostOccurences) {
      this.mode = value;
      this.mostOccurences = this.occurences[value];
    }
  }

  getMax() {
    return this.highestTemp;
  }

  getMin() {
    return this.lowestTemp;
  }

  getMean() {
    return this.totalTemp/this.numTemps
  }

  getMode() {
    return this.mode;
  }
}
