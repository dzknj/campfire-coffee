// my js will be in here


var pikePlaceMarketLoc = {
  minCustPerHour: 14,
  maxCustPerHour: 55,
  cupsPerCust: 1.2,
  lbsToGoPerCust: 3.7,
}

pikePlaceMarketLoc.generateNumOfCust = function() {
  return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
}
