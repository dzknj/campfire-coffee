// my js will be in here

var   resultsArray = [["6:00am", 0, 0, 0],
                      ["7:00am", 0, 0, 0],
                      ["8:00am", 0, 0, 0],
                      ["9:00am", 0, 0, 0],
                      ["10:00am", 0, 0, 0],
                      ["11:00am", 0, 0, 0],
                      ["12:00pm", 0, 0, 0],
                      ["1:00pm", 0, 0, 0],
                      ["2:00pm", 0, 0, 0],
                      ["3:00pm", 0, 0, 0],
                      ["4:00pm", 0, 0, 0],
                      ["5:00pm", 0, 0, 0],
                      ["6:00pm", 0, 0, 0],
                      ["7:00pm", 0, 0, 0],
                      ["8:00pm", 0, 0, 0]];



var pikePlaceMarketLoc = {
  minCustPerHour: 14,
  maxCustPerHour: 55,
  cupsPerCust: 1.2,
  lbsToGoPerCust: 3.7
}

pikePlaceMarketLoc.results = resultsArray;

pikePlaceMarketLoc.generateNumOfCust = function() {
  return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
}

pikePlaceMarketLoc.genHourlyStats = function(i) {
  // stats[0] is the hour
  //stats[0] = "6:00am";
  //stats[1] is the number of customers for this hour
  this.results[i][1] = this.generateNumOfCust();
  //stats[2] is the number of cups purchased this hour
  this.results[i][2] = this.results[i][1] * this.cupsPerCust;
  //stats[3] is the number of lbs purchased this hour
  this.results[i][3] = this.results[i][1] * this.lbsToGoPerCust;
  return;
}

var showStatsLine = function(i) {
  pikePlaceMarketLoc.genHourlyStats(i);
  var lbsForCups = pikePlaceMarketLoc.results[i][1] / 20;
  var totalLbs = lbsForCups + pikePlaceMarketLoc.results[i][3]
  currentLine = pikePlaceMarketLoc.results[i][0] + ': ' + totalLbs.toFixed(1) + ' lbs [' + pikePlaceMarketLoc.results[i][1] + ' customers, ' + pikePlaceMarketLoc.results[i][2].toFixed(1) + ' cups (' + lbsForCups.toFixed(1) + ' lbs.), ' + pikePlaceMarketLoc.results[i][3].toFixed(1) + ' lbs to-go]';
  console.log(currentLine);
}

for(i = 0;i < pikePlaceMarketLoc.results.length; i++) {
  showStatsLine(i);
}
