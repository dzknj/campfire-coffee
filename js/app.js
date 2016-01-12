// my js will be in here

// for future use
// var   timesArray = ["6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm",
//                    "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm", "8:00pm"];



var   resultsArray = [["6:00am", 0, 0, 0],
                      ["7:00am", 0, 0, 0],
                      ["8:00am", 0, 0, 0],
                      ["9:00am", 0, 0, 0],
                      ["10:00am", 0, 0, 0],
                      ["11:00am", 0, 0, 0],
                      ["12 noon", 0, 0, 0],
                      ["1:00pm", 0, 0, 0],
                      ["2:00pm", 0, 0, 0],
                      ["3:00pm", 0, 0, 0],
                      ["4:00pm", 0, 0, 0],
                      ["5:00pm", 0, 0, 0],
                      ["6:00pm", 0, 0, 0],
                      ["7:00pm", 0, 0, 0],
                      ["8:00pm", 0, 0, 0]];


var generateNumOfCustomers = function() {
  return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
}

var genHourlyStatistics = function(i) {
  //stats[1] is the number of customers for this hour
  this.results[i][1] = this.generateNumOfCust();
  //stats[2] is the number of cups purchased this hour
  this.results[i][2] = this.results[i][1] * this.cupsPerCust;
  //stats[3] is the number of lbs purchased this hour
  this.results[i][3] = this.results[i][1] * this.lbsToGoPerCust;
  return;
}

var pikePlaceMarketLoc = {
  storeLoc: "Pike Place Market",
  minCustPerHour: 14,
  maxCustPerHour: 55,
  cupsPerCust: 1.2,
  lbsToGoPerCust: 3.7
}

pikePlaceMarketLoc.results = resultsArray;
pikePlaceMarketLoc.generateNumOfCust = generateNumOfCustomers;
pikePlaceMarketLoc.genHourlyStats = genHourlyStatistics;

var capHillLoc = {
  storeLoc: "Capitol Hill",
  minCustPerHour: 32,
  maxCustPerHour: 48,
  cupsPerCust: 3.2,
  lbsToGoPerCust: 0.4
}

capHillLoc.results = resultsArray;
capHillLoc.generateNumOfCust = generateNumOfCustomers;
capHillLoc.genHourlyStats = genHourlyStatistics;







var showStatsLine = function(i, loc) {
  loc.genHourlyStats(i);
  var lbsForCups = loc.results[i][1] / 20;
  var totalLbs = lbsForCups + loc.results[i][3]
  currentLine = loc.results[i][0] + ': ' + totalLbs.toFixed(1);
  currentLine += ' lbs [' + loc.results[i][1] + ' customers, ';
  currentLine += loc.results[i][2].toFixed(1) + ' cups (';
  currentLine += lbsForCups.toFixed(1) + ' lbs.), ';
  currentLine += loc.results[i][3].toFixed(1) + ' lbs to-go]';
  console.log(currentLine);
  var newPar = document.createElement('p');
  var newText = document.createTextNode(currentLine);
  newPar.appendChild(newText);
//  msg = '<p>' + currentLine + '</p>';
  listHeader.parentElement.appendChild(newPar);
//  var msg =

}
var listHeader = document.getElementById('datahead');
listHeader.textContent = pikePlaceMarketLoc.storeLoc;

for(i = 0;i < pikePlaceMarketLoc.results.length; i++) {
  showStatsLine(i, pikePlaceMarketLoc);
}

var newHeader = document.createElement('h2');
var newHeaderText = document.createTextNode(capHillLoc.storeLoc);
newHeader.appendChild(newHeaderText);
listHeader.parentElement.appendChild(newHeader);

for(i = 0;i < pikePlaceMarketLoc.results.length; i++) {
  showStatsLine(i, capHillLoc);
}
