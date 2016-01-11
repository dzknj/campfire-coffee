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

pikePlaceMarketLoc.returnHourlyStats = function() {
  var stats = [0, 0, 0];
  stats[0] = this.generateNumOfCust();
  stats[1] = stats[0] * this.cupsPerCust;
  stats[2] = stats[0] * this.lbsToGoPerCust;
  return stats;
}
