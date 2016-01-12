"use strict";

var   timesArray = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm',
                   '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

var resultsBlank = {
  timeString: '',
  numberOfCustomers: 0,
  cupsSold: 0,
  lbsSold: 0
}

function StoreLocation(storeLoc, minCustPerHour, maxCustPerHour, cupsPerCust, lbsToGoPerCust) {
  this.storeLoc = storeLoc;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.cupsPerCust = cupsPerCust;
  this.lbsToGoPerCust = lbsToGoPerCust;
  this.results = resultsBlank;
  this.generateNumOfCustomers = function() {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  }
  this.genHourlyStatistics = function(i) {
    this.results.timeString = timesArray[i];
    this.results.numberOfCustomers = this.generateNumOfCustomers();
    this.results.cupsSold = this.results.numberOfCustomers * this.cupsPerCust;
    this.results.lbsSold = this.results.numberOfCustomers * this.lbsToGoPerCust;
    return;
  }
}

var pikePlaceMarketLoc = new StoreLocation('Pike Place Market', 14, 55, 1.2, 5.7);

var capHillLoc = new StoreLocation('Capitol Hill', 32, 48, 3.2, 0.4);

// function renderTblLine(timeString, totalLbs) {
//
// }

// function renderTable(store) {
//
// }


var showStatsLine = function(i, loc) {
  loc.genHourlyStatistics(i);
  var lbsForCups = loc.results.numberOfCustomers / 20;
  var totalLbs = lbsForCups + loc.results.lbsSold;
  var currentLine = loc.results.timeString + ': ' + totalLbs.toFixed(1);
  currentLine += ' lbs [' + loc.results.numberOfCustomers + ' customers, ';
  currentLine += loc.results.cupsSold.toFixed(1) + ' cups (';
  currentLine += lbsForCups.toFixed(1) + ' lbs.), ';
  currentLine += loc.results.lbsSold.toFixed(1) + ' lbs to-go]';
  console.log(currentLine);
  var newPar = document.createElement('p');
  var newText = document.createTextNode(currentLine);
  newPar.appendChild(newText);
  listHeader.parentElement.appendChild(newPar);

}
var listHeader = document.getElementById('datahead');
listHeader.textContent = pikePlaceMarketLoc.storeLoc;

for(var i = 0;i < timesArray.length; i++) {
  showStatsLine(i, pikePlaceMarketLoc);
}

var newHeader = document.createElement('h2');
var newHeaderText = document.createTextNode(capHillLoc.storeLoc);
newHeader.appendChild(newHeaderText);
listHeader.parentElement.appendChild(newHeader);

for(var i = 0;i < timesArray.length; i++) {
  showStatsLine(i, capHillLoc);
}
