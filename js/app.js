'use strict';
console.log('howdy');

let openHours = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', `1600`, '1700', '1800', '1900', '2000',]

let seattle = {
  location : 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSales: 6.3,
  custPerHr: [],
  cookiesPerHr: [],
  totalCookies: 0,
  calcCust: function() {
    for(let i=0; i < openHours.length; i++){
    this.custPerHr.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
  },
  calcCookies: function() {
    this.calcCust()
    for (let i= 0; i < openHours.length; i++)
    this.cookiesPerHr.push(Math.ceil(this.custPerHr[i] * this.avgSales));
    console.log(this.cookiesPerHr);
    }
  }

  // finalSale: render() {
  //   for (let i = 0; i < openHours.length; i++;){
  //     this.totalCookies = (Math.ceil(this.cookiesPerHr[i] + this.totalCookies))[0];
  //     console.log(this.totalCookies);
  //   }


const Stores = [seattle]

seattle.calcCookies();
seattle.render();
console.log(seattle.custPerHr);