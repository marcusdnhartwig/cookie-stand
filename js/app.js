'use strict';
console.log('howdy');

let section = document.getElementById('stores');
console.log(section);
//setting variable / array 
let openHours = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', `1600`, '1700', '1800', '1900',];

//static sites to start

const seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSales: 6.3,
  custPerHr: [],
  cookiesPerHr: [],
  totalCookies: 0,
  calcCust: function () {
    for (let i = 0; i < openHours.length; i++) {
      this.custPerHr.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
  },
  calcCookies: function () {
    for (let i = 0; i < openHours.length; i++) {
      this.cookiesPerHr.push(Math.ceil(this.custPerHr[i] * this.avgSales));
      console.log(this.cookiesPerHr);
    }
  },
  calcTotalCookies: function () {
    for (let i = 0; i < this.cookiesPerHr.length; i++) {
      this.totalCookies += this.cookiesPerHr[i];
    }
  },
  render: function () {
    this.calcCookies();
    this.calcTotalCookies();
    let ul = document.createElement('ul');
    section.appendChild(ul)
    for (let i = 0; i < openHours.length; i++) {
      let li = document.createElement('li')
      li.textContent = `${openHours[i]}: ${this.cookiesPerHr[i]}`;
      ul.appendChild(li);
    }
  },
}

//const Stores = [seattle]
seattle.calcCust();
//seattle.calcCookies();
//seattle.calcTotalCookies();
seattle.render();
console.log(seattle.custPerHr);
console.log(seattle.totalCookies);
///////

const tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSales: 1.2,
  custPerHr: [],
  cookiesPerHr: [],
  totalCookies: 0,
  calcCust: function () {
    for (let i = 0; i < openHours.length; i++) {
      this.custPerHr.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
  },
  calcCookies: function () {
    for (let i = 0; i < openHours.length; i++) {
      this.cookiesPerHr.push(Math.ceil(this.custPerHr[i] * this.avgSales));
      console.log(this.cookiesPerHr);
    }
  },
  calcTotalCookies: function () {
    for (let i = 0; i < this.cookiesPerHr.length; i++) {
      this.totalCookies += this.cookiesPerHr[i];
    }
  },
  render: function () {
    this.calcCookies();
    this.calcTotalCookies();
    let ul = document.createElement('ul');
    section.appendChild(ul)
    for (let i = 0; i < openHours.length; i++) {
      let li = document.createElement('li')
      li.textContent = `${openHours[i]}: ${this.cookiesPerHr[i]}`;
      ul.appendChild(li);
    }
  },
}

//const Stores = [tokyo]
tokyo.calcCust();
//tokyo.calcCookies();
//tokyo.calcTotalCookies();
tokyo.render();
//tokyo.log(tokyo.custPerHr); /// **** For whatever reason this is screaming at me!?
console.log(tokyo.totalCookies);
///////

const dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSales: 3.7,
  custPerHr: [],
  cookiesPerHr: [],
  totalCookies: 0,
  calcCust: function () {
    for (let i = 0; i < openHours.length; i++) {
      this.custPerHr.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
  },
  calcCookies: function () {
    for (let i = 0; i < openHours.length; i++) {
      this.cookiesPerHr.push(Math.ceil(this.custPerHr[i] * this.avgSales));
      console.log(this.cookiesPerHr);
    }
  },
  calcTotalCookies: function () {
    for (let i = 0; i < this.cookiesPerHr.length; i++) {
      this.totalCookies += this.cookiesPerHr[i];
    }
  },
  render: function () {
    this.calcCookies();
    this.calcTotalCookies();
    let ul = document.createElement('ul');
    section.appendChild(ul)
    for (let i = 0; i < openHours.length; i++) {
      let li = document.createElement('li')
      li.textContent = `${openHours[i]}: ${this.cookiesPerHr[i]}`;
      ul.appendChild(li);
    }
  },
}

//const Stores = [dubai]
dubai.calcCust();
//dubai.calcCookies();
//dubai.calcTotalCookies();
dubai.render();
console.log(dubai.custPerHr);
console.log(dubai.totalCookies);
///////

const paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSales: 2.3,
  custPerHr: [],
  cookiesPerHr: [],
  totalCookies: 0,
  calcCust: function () {
    for (let i = 0; i < openHours.length; i++) {
      this.custPerHr.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
  },
  calcCookies: function () {
    for (let i = 0; i < openHours.length; i++) {
      this.cookiesPerHr.push(Math.ceil(this.custPerHr[i] * this.avgSales));
      console.log(this.cookiesPerHr);
    }
  },
  calcTotalCookies: function () {
    for (let i = 0; i < this.cookiesPerHr.length; i++) {
      this.totalCookies += this.cookiesPerHr[i];
    }
  },
  render: function () {
    this.calcCookies();
    this.calcTotalCookies();
    let ul = document.createElement('ul');
    section.appendChild(ul)
    for (let i = 0; i < openHours.length; i++) {
      let li = document.createElement('li')
      li.textContent = `${openHours[i]}: ${this.cookiesPerHr[i]}`;
      ul.appendChild(li);
    }
  },
}

//const Stores = [paris]
paris.calcCust();
//paris.calcCookies();
//paris.calcTotalCookies();
paris.render();
console.log(paris.custPerHr);
console.log(paris.totalCookies);
///////

const lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSales: 4.6,
  custPerHr: [],
  cookiesPerHr: [],
  totalCookies: 0,
  calcCust: function () {
    for (let i = 0; i < openHours.length; i++) {
      this.custPerHr.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
  },
  calcCookies: function () {
    for (let i = 0; i < openHours.length; i++) {
      this.cookiesPerHr.push(Math.ceil(this.custPerHr[i] * this.avgSales));
      console.log(this.cookiesPerHr);
    }
  },
  calcTotalCookies: function () {
    for (let i = 0; i < this.cookiesPerHr.length; i++) {
      this.totalCookies += this.cookiesPerHr[i];
    }
  },
  render: function () {
    this.calcCookies();
    this.calcTotalCookies();
    let ul = document.createElement('ul');
    section.appendChild(ul)
    for (let i = 0; i < openHours.length; i++) {
      let li = document.createElement('li')
      li.textContent = `${openHours[i]}: ${this.cookiesPerHr[i]}`;
      ul.appendChild(li);
    }
  },
}

//const Stores = [lima]
lima.calcCust();
//lima.calcCookies();
//lima.calcTotalCookies();
lima.render();
console.log(lima.custPerHr);
console.log(lima.totalCookies);
///////
console.log('I did this! Hell Yeah!');