'use strict';
console.log('howdy');

let storeHours = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', `1600`, '1700', '1800', '1900',];  

function randomCustomerNum (min, max){
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

let salmonCities = [];  

function City (cityName, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer){
  this.cityName = cityName; 
  this.minHourlyCustomers = minHourlyCustomers; 
  this.maxHourlyCustomers = maxHourlyCustomers; 
  this.avgCookiesPerCustomer = avgCookiesPerCustomer; 
  this.customersPerHour = [];
  this.cookiesPurchasedPerHour = []; 
  this.totalCookiesPerDay = 0; 
  salmonCities.push(this); 
}

City.prototype.getCustomersPerHour = function (){
  for (let i = 0; i < storeHours.length; i++){
    let currentHourCustomers = randomCustomerNum(this.minHourlyCustomers, this.maxHourlyCustomers);
    this.customersPerHour.push(currentHourCustomers);
  }
}

City.prototype.getCookiesPurchasedPerHour = function(){
  for (let i = 0; i < storeHours.length; i++){
    let actionA = this.avgCookiesPerCustomer * this.customersPerHour[i]; 
    let actionB = Math.round(actionA); 
    this.cookiesPurchasedPerHour.push(actionB);
  }
}

City.prototype.getTotalCookiesPurchased = function (){
  for (let i = 0; i < this.cookiesPurchasedPerHour.length; i++){
    this.totalCookiesPerDay += this.cookiesPurchasedPerHour[i]; 
  }
}


let seattle = new City ('Seattle', 23, 65, 6.3); 
seattle.getCustomersPerHour(); 
seattle.getCookiesPurchasedPerHour(); 
seattle.getTotalCookiesPurchased(); 
console.log(seattle); 
console.log(salmonCities); 

let tokyo = new City ('Tokyo', 3, 24, 1.2); 
tokyo.getCustomersPerHour(); 
tokyo.getCookiesPurchasedPerHour(); 
tokyo.getTotalCookiesPurchased(); 
console.log(tokyo); 
console.log(salmonCities); 

let dubai = new City ('Dubai', 11, 38, 3.7); 
dubai.getCustomersPerHour(); 
dubai.getCookiesPurchasedPerHour(); 
dubai.getTotalCookiesPurchased(); 
console.log(dubai); 
console.log(salmonCities); 

let paris = new City ('Paris', 20, 38, 2.3); 
paris.getCustomersPerHour(); 
paris.getCookiesPurchasedPerHour(); 
paris.getTotalCookiesPurchased(); 
console.log(paris); 
console.log(salmonCities); 

let lima = new City ('Lima', 2, 16, 4.6); 
lima.getCustomersPerHour(); 
lima.getCookiesPurchasedPerHour(); 
lima.getTotalCookiesPurchased(); 
console.log(lima); 
console.log(salmonCities); 

const parentElement = document.getElementById('sales-table'); 

function renderTableMain (){
  for (let i = 0; i < salmonCities.length; i++){
    let currentCity = salmonCities[i]; 
    let currentRow = document.createElement('tr');  
    let tableData = document.createElement('td'); 
    tableData.textContent = currentCity.cityName;
    parentElement.appendChild(currentRow); 
    currentRow.appendChild(tableData); 
    for (let j = 0; j < currentCity.cookiesPurchasedPerHour.length; j++){
        let currentDatum = currentCity.cookiesPurchasedPerHour[j];
        let currentDatumCell = document.createElement('td'); 
        currentDatumCell.textContent = currentDatum; 
        currentRow.appendChild(currentDatumCell); 
    }
  }
} 


function renderTableHeader(){
  let tableHeading = document.createElement('tr');
  let cityHeading = document.createElement('th');
  parentElement.appendChild(tableHeading); 
  tableHeading.appendChild(cityHeading); 
  cityHeading.textContent = 'City Names'; 
  for (let i = 0; i < storeHours.length; i++){
    let currentTime = storeHours[i]; 
    let currentTableHeader = document.createElement('th'); 
    currentTableHeader.textContent = currentTime; 
    tableHeading.appendChild(currentTableHeader); 
  }
}

renderTableHeader(); 
renderTableMain(); 























// let section = document.getElementById('stores');
// console.log(section);
// //setting variable / array 
// let openHours = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', `1600`, '1700', '1800', '1900',];

// //static sites to start

// const seattle = {
//   location: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgSales: 6.3,
//   custPerHr: [],
//   cookiesPerHr: [],
//   totalCookies: 0,
//   calcCust: function () {
//     for (let i = 0; i < openHours.length; i++) {
//       this.custPerHr.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
//     }
//   },
//   calcCookies: function () {
//     for (let i = 0; i < openHours.length; i++) {
//       this.cookiesPerHr.push(Math.ceil(this.custPerHr[i] * this.avgSales));
//       console.log(this.cookiesPerHr);
//     }
//   },
//   calcTotalCookies: function () {
//     for (let i = 0; i < this.cookiesPerHr.length; i++) {
//       this.totalCookies += this.cookiesPerHr[i];
//     }
//   },
//   render: function () {
//     this.calcCookies();
//     this.calcTotalCookies();
//     let ul = document.createElement('ul');
//     section.appendChild(ul)
//     for (let i = 0; i < openHours.length; i++) {
//       let li = document.createElement('li')
//       li.textContent = `${openHours[i]}: ${this.cookiesPerHr[i]}`;
//       ul.appendChild(li);
//     }
//   },
// }

// //const Stores = [seattle]
// seattle.calcCust();
// //seattle.calcCookies();
// //seattle.calcTotalCookies();
// seattle.render();
// console.log(seattle.custPerHr);
// console.log(seattle.totalCookies);
// ///////

// const tokyo = {
//   location: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgSales: 1.2,
//   custPerHr: [],
//   cookiesPerHr: [],
//   totalCookies: 0,
//   calcCust: function () {
//     for (let i = 0; i < openHours.length; i++) {
//       this.custPerHr.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
//     }
//   },
//   calcCookies: function () {
//     for (let i = 0; i < openHours.length; i++) {
//       this.cookiesPerHr.push(Math.ceil(this.custPerHr[i] * this.avgSales));
//       console.log(this.cookiesPerHr);
//     }
//   },
//   calcTotalCookies: function () {
//     for (let i = 0; i < this.cookiesPerHr.length; i++) {
//       this.totalCookies += this.cookiesPerHr[i];
//     }
//   },
//   render: function () {
//     this.calcCookies();
//     this.calcTotalCookies();
//     let ul = document.createElement('ul');
//     section.appendChild(ul)
//     for (let i = 0; i < openHours.length; i++) {
//       let li = document.createElement('li')
//       li.textContent = `${openHours[i]}: ${this.cookiesPerHr[i]}`;
//       ul.appendChild(li);
//     }
//   },
// }

// //const Stores = [tokyo]
// tokyo.calcCust();
// //tokyo.calcCookies();
// //tokyo.calcTotalCookies();
// tokyo.render();
// //tokyo.log(tokyo.custPerHr); /// **** For whatever reason this is screaming at me!?
// console.log(tokyo.totalCookies);
// ///////

// const dubai = {
//   location: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgSales: 3.7,
//   custPerHr: [],
//   cookiesPerHr: [],
//   totalCookies: 0,
//   calcCust: function () {
//     for (let i = 0; i < openHours.length; i++) {
//       this.custPerHr.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
//     }
//   },
//   calcCookies: function () {
//     for (let i = 0; i < openHours.length; i++) {
//       this.cookiesPerHr.push(Math.ceil(this.custPerHr[i] * this.avgSales));
//       console.log(this.cookiesPerHr);
//     }
//   },
//   calcTotalCookies: function () {
//     for (let i = 0; i < this.cookiesPerHr.length; i++) {
//       this.totalCookies += this.cookiesPerHr[i];
//     }
//   },
//   render: function () {
//     this.calcCookies();
//     this.calcTotalCookies();
//     let ul = document.createElement('ul');
//     section.appendChild(ul)
//     for (let i = 0; i < openHours.length; i++) {
//       let li = document.createElement('li')
//       li.textContent = `${openHours[i]}: ${this.cookiesPerHr[i]}`;
//       ul.appendChild(li);
//     }
//   },
// }

// //const Stores = [dubai]
// dubai.calcCust();
// //dubai.calcCookies();
// //dubai.calcTotalCookies();
// dubai.render();
// console.log(dubai.custPerHr);
// console.log(dubai.totalCookies);
// ///////

// const paris = {
//   location: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgSales: 2.3,
//   custPerHr: [],
//   cookiesPerHr: [],
//   totalCookies: 0,
//   calcCust: function () {
//     for (let i = 0; i < openHours.length; i++) {
//       this.custPerHr.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
//     }
//   },
//   calcCookies: function () {
//     for (let i = 0; i < openHours.length; i++) {
//       this.cookiesPerHr.push(Math.ceil(this.custPerHr[i] * this.avgSales));
//       console.log(this.cookiesPerHr);
//     }
//   },
//   calcTotalCookies: function () {
//     for (let i = 0; i < this.cookiesPerHr.length; i++) {
//       this.totalCookies += this.cookiesPerHr[i];
//     }
//   },
//   render: function () {
//     this.calcCookies();
//     this.calcTotalCookies();
//     let ul = document.createElement('ul');
//     section.appendChild(ul)
//     for (let i = 0; i < openHours.length; i++) {
//       let li = document.createElement('li')
//       li.textContent = `${openHours[i]}: ${this.cookiesPerHr[i]}`;
//       ul.appendChild(li);
//     }
//   },
// }

// //const Stores = [paris]
// paris.calcCust();
// //paris.calcCookies();
// //paris.calcTotalCookies();
// paris.render();
// console.log(paris.custPerHr);
// console.log(paris.totalCookies);
// ///////

// const lima = {
//   location: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgSales: 4.6,
//   custPerHr: [],
//   cookiesPerHr: [],
//   totalCookies: 0,
//   calcCust: function () {
//     for (let i = 0; i < openHours.length; i++) {
//       this.custPerHr.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
//     }
//   },
//   calcCookies: function () {
//     for (let i = 0; i < openHours.length; i++) {
//       this.cookiesPerHr.push(Math.ceil(this.custPerHr[i] * this.avgSales));
//       console.log(this.cookiesPerHr);
//     }
//   },
//   calcTotalCookies: function () {
//     for (let i = 0; i < this.cookiesPerHr.length; i++) {
//       this.totalCookies += this.cookiesPerHr[i];
//     }
//   },
//   render: function () {
//     this.calcCookies();
//     this.calcTotalCookies();
//     let ul = document.createElement('ul');
//     section.appendChild(ul)
//     for (let i = 0; i < openHours.length; i++) {
//       let li = document.createElement('li')
//       li.textContent = `${openHours[i]}: ${this.cookiesPerHr[i]}`;
//       ul.appendChild(li);
//     }
//   },
// }

// //const Stores = [lima]
// lima.calcCust();
// //lima.calcCookies();
// //lima.calcTotalCookies();
// lima.render();
// console.log(lima.custPerHr);
// console.log(lima.totalCookies);
// ///////
// console.log('I did this! Hell Yeah!');

// let openHours = [];

// function randomCustomerNum(min, max) {
//   return Math.floor(Math.random() * (max - min +1) + min);
// }

// let myCities = [];

// function City(cityName, minHourlyCustomers, maxHourlyCustormers, avCookiesPerCustomer) {
//   this.cityName = cityName;
//   this.minHourlyCustomers = minHourlyCustomers;
//   this.maxHourlyCustormers = maxHourlyCustormers;
//   this.avgCookiesPerCustomer = avCookiesPerCustomer;
//   this.custPerHr = [];
//   this. cookiesPerHr = [];
//   this.totalCookies =0;
//   myCities.push(this);
// }

// City.prototype.getCustomersPerHr = function () {
//   for (let i = 0; i < openHours.length; i++) {
//     let currentHrCustomers = randomCustomerNum(this.minHourlyCustomers, this.maxHourlyCustormers);
//     this.custPerHr.push(currentHrCustomers);
//   }
// };

// let seattle = new City('Seattle', 23, 65, 6.3);
// seattle.getCustomersPerHr();
// seattle.cookiesPerHr();
// seattle.totalCookies();
// console.log('Seattle', seattle)
// console.log(myCities);