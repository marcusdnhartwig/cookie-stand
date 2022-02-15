'use strict';
console.log('howdy');

let openHours = ['0600', '0700']

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
  },
   cityName [seattle];

  function renderAllcities(){
    for(let i = 0; i < cityName.length; i++){
      let 
    }
  }
}

//const Stores = [seattle]

seattle.calcCookies();
seattle.render();
console.log(seattle.custPerHr);