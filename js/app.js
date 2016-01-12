"use strict";

var   timesArray = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm',
                   '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

var resultsBlank = {
  timeString: '',
  numberOfCustomers: 0,
  cupsSold: 0,
  lbsSold: 0
}

function StoreLocation(locName, minCustPerHour, maxCustPerHour, cupsPerCust, lbsToGoPerCust) {
  this.locName = locName;
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

var storeArray = [];

storeArray.push(new StoreLocation('Pike Place Market', 14, 55, 1.2, 5.7));
storeArray.push(new StoreLocation('Capitol Hill', 32, 48, 3.2, 0.4));
storeArray.push(new StoreLocation('Seattle Public Library', 49, 75, 2.6, 0.2));
storeArray.push(new StoreLocation('South Lake Union', 35, 88, 1.3, 3.7));
storeArray.push(new StoreLocation('Sea-Tac Airport', 68, 124, 1.1, 2.7));
storeArray.push(new StoreLocation('Website Sales', 3, 6, 0, 6.7));


var sectHead = document.getElementById('main');

function createRow(el1Text, el2Text) {
  var newRow = document.createElement('tr');
  var element1 = document.createElement('td');
  element1.textContent = el1Text;
  var element2 = document.createElement("td");
  element2.textContent = el2Text;
  newRow.appendChild(element1);
  newRow.appendChild(element2);
  return newRow;
}

function renderRow(storeLoc, i) {
  storeLoc.genHourlyStatistics();
  var lbsForCups = storeLoc.results.numberOfCustomers / 20;
  var totalLbs = lbsForCups + storeLoc.results.lbsSold;
  return createRow(timesArray[i], totalLbs.toFixed(1));
}

function renderTable(storeLoc) {
  // create a new header element with the store name
  var newHeader = document.createElement('h2');
  var newHeaderText = document.createTextNode(storeLoc.locName);
  newHeader.appendChild(newHeaderText);
  sectHead.appendChild(newHeader);
  // create a new table
  var newTable = document.createElement('table');
  var newTableHead =document.createElement('thead');
  // create the top row
  var topRow = document.createElement('tr');
  // create header for the row
  var top1El = document.createElement('th');
  // put text in there
  top1El.textContent = 'Time of Day';
  var top2El = document.createElement('th');
  top2El.textContent = 'Pounds sold';
  topRow.appendChild(top1El);
  topRow.appendChild(top2El);
  newTableHead.appendChild(topRow);
  newTable.appendChild(newTableHead);
  for(var i = 0;i < timesArray.length; i++) {
    newTable.appendChild(renderRow(storeLoc, i));
  }
  sectHead.appendChild(newTable);
}

for(var j = 0; j < storeArray.length; j++) {
  renderTable(storeArray[j]);
}
