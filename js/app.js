"use strict";

var   timesArray = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm',
                   '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var   timesLength = timesArray.length;

// var resultsBlank = {
//   timeString: '',
//   numberOfCustomers: 0,
//   cupsSold: 0,
//   lbsSold: 0
// }

function StoreLocation(locName, minCustPerHour, maxCustPerHour, cupsPerCust, lbsToGoPerCust) {
  this.locName = locName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.cupsPerCust = cupsPerCust;
  this.lbsToGoPerCust = lbsToGoPerCust;
  // this.results = resultsBlank;
  this.numberOfCustomers = [];
  this.cupsSold = [];
  this.lbsSold = [];
  this.dailyLbsSold = 0;
  this.generateNumOfCustomers = function() {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  }
  this.genHourlyStatistics = function() {
//    this.results.timeString = timesArray[i];
    this.numberOfCustomers.push(this.generateNumOfCustomers());
    var arrPosition = this.numberOfCustomers.length - 1;
    this.cupsSold.push(this.numberOfCustomers[arrPosition] * this.cupsPerCust);
    this.lbsSold.push((this.numberOfCustomers[arrPosition] * this.lbsToGoPerCust) + (this.cupsSold[this.cupsSold.length - 1] / 20));
    return;
  }
}


// storeArray contains a set of objects, each representing a store location

var storeArray = [];

storeArray.push(new StoreLocation('Pike Place Market', 14, 55, 1.2, 5.7));
storeArray.push(new StoreLocation('Capitol Hill', 32, 48, 3.2, 0.4));
storeArray.push(new StoreLocation('Seattle Public Library', 49, 75, 2.6, 0.2));
storeArray.push(new StoreLocation('South Lake Union', 35, 88, 1.3, 3.7));
storeArray.push(new StoreLocation('Sea-Tac Airport', 68, 124, 1.1, 2.7));
storeArray.push(new StoreLocation('Website Sales', 3, 6, 0, 6.7));

// sectHead is the top of the section that holds the tables

var sectHead = document.getElementById('main');

// renderRow returns HTML for each row of each table, given input of the text
// for each element. 'header' is a boolean indicating in the row is at the
// head of the table.

function renderStoreRow(rowHdrText, rowContentArray, rowTotal, isHeader) {
  var newRow = document.createElement('tr');
  var rowElementArray = [];
  rowElementArray[0] = document.createElement('th');
  rowElementArray[0].textContent = rowHdrText;
  if(isHeader) {
    for(var i = 0; i <= timesLength; i++) {
      rowElementArray[i + 1] = document.createElement('th');
      rowElementArray[i + 1].textContent = rowContentArray[i];
    }
    rowElementArray[timesLength + 1]  = document.createElement('th');
    rowElementArray[i].textContent = "Totals";
  } else {
    for(var i = 0; i <= timesLength; i++) {
      rowElementArray[i + 1] = document.createElement('td');
      rowElementArray[i + 1].textContent = parseFloat(rowContentArray[i]).toFixed(1);
    }
    rowElementArray[timesLength + 1]  = document.createElement('td');
    rowElementArray[i].textContent = rowTotal;
  }
    for(var i = 0; i <= timesLength + 1; i++) {
      newRow.appendChild(rowElementArray[i]);
    }
    return newRow;
}

function renderTable() {
  var newTable = document.createElement('table');
  var newTableHead =document.createElement('thead');
  // create a header for the table
  newTableHead.appendChild(renderStoreRow("", timesArray, "Totals", true));
  for(var i = 0; i < storeArray.length; i++) {
    newTableHead.appendChild(renderStoreRow(storeArray[i].locName, storeArray[i].lbsSold, storeArray[i].dailyLbsSold.toFixed(1), false));
  }
  newTable.appendChild(newTableHead);
  sectHead.appendChild(newTable);
}

function generateStoreData() {
  for(var i = 0; i < storeArray.length; i++) {
    for(var j = 0; j < timesLength; j++) {
      storeArray[i].genHourlyStatistics();
      storeArray[i].dailyLbsSold += storeArray[i].lbsSold[j];
    }
  }
}

generateStoreData();
renderTable();

// function renderRow(el1Text, el2Text, header) {
//   var newRow = document.createElement('tr');
//   if(header) {
//     var element1 = document.createElement('th');
//     var element2 = document.createElement("th");
//   } else {
//     var element1 = document.createElement('td');
//     var element2 = document.createElement("td");
//   }
//   element1.textContent = el1Text;
//   element2.textContent = el2Text;
//   newRow.appendChild(element1);
//   newRow.appendChild(element2);
//   return newRow;
// }
//
// // calcRow calculates the stats for each hour, then calls renderRow to
// // generate the HTML
//
// function calcRow(storeLoc, i) {
//   storeLoc.genHourlyStatistics();
//   var lbsForCups = storeLoc.numberOfCustomers[i] / 20;
//   var totalLbs = lbsForCups + storeLoc.lbsSold[i];
//   return renderRow(timesArray[i], totalLbs.toFixed(1), false);
// }
//
// // renderTable creates a table beneath a header with the store name
//
// function renderTable(storeLoc) {
//   // create a new header element with the store name
//   var newHeader = document.createElement('h2');
//   var newHeaderText = document.createTextNode(storeLoc.locName);
//   newHeader.appendChild(newHeaderText);
//   // add it to the section
//   sectHead.appendChild(newHeader);
//   // create a new table
//   var newTable = document.createElement('table');
//   var newTableHead =document.createElement('thead');
//   // call renderRow to create a header for the table
//   newTableHead.appendChild(renderRow('Time of Day', 'Pounds Sold', true));
//   newTable.appendChild(newTableHead);
//   // generate the data for each row
//   for(var i = 0;i < timesArray.length; i++) {
//     newTable.appendChild(calcRow(storeLoc, i));
//   }
//   // ... and finally add the table to the section
//   sectHead.appendChild(newTable);
// }

// main loop: generate a table for each object in storeArray



// for(var j = 0; j < storeArray.length; j++) {
//   renderTable(storeArray[j]);
// }
