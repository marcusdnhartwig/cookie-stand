'use strict';
console.log('howdy');

let SalmonCookie = document.getElementById('salmon-cookies');
let table = document.getElementById('table');
let cookieForm = document.getElementById('sales-form');
let footer = document.createElement('tfoot');


let custHourly = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let myLocation = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
let stores = [];

function Store(location, minCust, maxCust, avgCookieSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.totalCookies = 0;
  this.customer = [];
  this.averageCookieHour = [];


  stores.push(this);

}

Store.prototype.avgCookie = function () {

  for (let i = 0; i < custHourly.length; i++) {
    this.customer.push(randCust(this.minCust, this.maxCust));
    this.averageCookieHour.push(Math.ceil(this.customer[i] * this.avgCookieSale));
    this.totalCookies += (this.averageCookieHour[i]);

  }

};
function randCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

seattle.avgCookie();
tokyo.avgCookie();
dubai.avgCookie();
paris.avgCookie();
lima.avgCookie();

function createTableHeads() {
  let row1 = document.createElement('tr');
  let th1Elem = document.createElement('th');
  th1Elem.textContent = ('City');
  row1.appendChild(th1Elem);
  table.appendChild(row1);

  for (let i = 0; i < custHourly.length; i++) {

    let th1Elem = document.createElement('th');
    th1Elem.textContent = custHourly[i];
    row1.appendChild(th1Elem);
  }
  let tlElem = document.createElement('th');
  tlElem.textContent = 'Daily Location Total';
  row1.appendChild(tlElem);


}

Store.prototype.render = function () {
  let row2 = document.createElement('tr');
  let td1Elem = document.createElement('td');
  td1Elem.textContent = this.location;
  row2.appendChild(td1Elem);
  table.appendChild(row2);

  for (let i = 0; i < this.averageCookieHour.length; i++) {
    let td1Elem = document.createElement('td');
    td1Elem.textContent = this.averageCookieHour[i];
    row2.appendChild(td1Elem);

  }


  let thElem = document.createElement('td');
  thElem.textContent = this.totalCookies;
  row2.appendChild(thElem);
};

function createFooter() {
  table.appendChild(footer);

  let footerRow = document.createElement('tr');
  footer.appendChild(footerRow);

  let hourlyTotaltb = document.createElement('th');
  hourlyTotaltb.textContent = 'Hourly Totals';
  footerRow.appendChild(hourlyTotaltb);


  let dailyTotal = 0;
  for (let i = 0; i < custHourly.length; i++) {
    let hourTotal = 0;
    for (let j = 0; j < stores.length; j++) {
      hourTotal += (stores[j].averageCookieHour[i]);
    }
    let tdhourlyTotal = document.createElement('td');
    tdhourlyTotal.textContent = `${hourTotal}`;
    footerRow.appendChild(tdhourlyTotal);
    dailyTotal += hourTotal;

  }

  let tdDailyTotal = document.createElement('td');
  tdDailyTotal.textContent = `${dailyTotal}`;
  footerRow.appendChild(tdDailyTotal);

}



function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target);
  let location = event.target.location.value;
  let minCust = parseInt(event.target.minCust.value);
  let maxCust = parseInt(event.target.maxCust.value);
  let avgCookieSale = parseInt(event.target.avgCookieSale.value);
  console.log(avgCookieSale);

  let newCity = new Store(location, minCust, maxCust, avgCookieSale);

  newCity.avgCookie();
  newCity.render();
  console.log(newCity);



  footer.innerHTML = '';
  createFooter();




}

cookieForm.addEventListener('submit', handleSubmit);


createTableHeads();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
createFooter();
















// function randomCustomerNum (min, max){
//   return Math.floor(Math.random() * (max - min + 1) + min); 
// }

// let salmonBakery = [];  

// function Store(storeName, minimumHourlyCustomer, maximumHourlyCustomer, averageCookiePerCustomer){
//   this.storeName = storeName;
//   this.minimumHourlyCustomer = minimumHourlyCustomer;
//   this.maximumHourlyCustomer = maximumHourlyCustomer;
//   this.averageCookiePerCustomer = averageCookiePerCustomer;
//   this.customersPerHour = [];
//   this.cookiesPurchasedPerHour = [];
//   this.totalCookiesPerDay = 0;
//   salmonBakery.push(this);
// }

// Store.prototype.getCustomersPerHour = function(){
//   for (let i = 0; i < storeHours.length; i++){
//     let currentHourCustomers = randomCustomerNum(this.
//     minimumHourlyCustomer, this.maximumHourlyCustomer);
//     console.log(currentHourCustomers);
//     this.customersPerHour.push(currentHourCustomers);
//   }
// }

// Store.prototype.getCookiesPurchasedPerHour = function(){
//   for (let i = 0; i < storeHours.length; i++){
//     let averageSalmons = this.averageCookiePerCustomer * this.customersPerHour[i];
//     let hourlySalmons = Math.round(averageSalmons);
//     this.cookiesPurchasedPerHour.push(hourlySalmons);
//   }
// }

// Store.prototype.gettotalCookiesPerDay = function(){
//   for (let i = 0; i < this.cookiesPurchasedPerHour.length; i++){
//     this.totalCookiesPerDay += this.cookiesPurchasedPerHour[i];
//   }
// }

// Store.prototype.render = function(){
//   this.getCookiesPurchasedPerHour();  
//   let storeTotal = 0;
//   let row = document.createElement('tr');
//   parentElement.appendChild(row);
  
//   let td = document.createElement('td');
//   parentElement.appendChild(td);
//   for (let i = 0; i < storeHours.length; i++){
//     let td = document.createElement('td');
//     td.textContent = this.getCookiesPurchasedPerHour[i];
//     storeTotal += this.cookiesPurchasedPerHour[i];
//     parentElement.appendChild.td;
//     // this.totalCookiesPerDay += this.cookiesPurchasedPerHour[i];
//   }
// }




// let seattle = new Store ('Seattle', 23, 65, 6.3); 
// seattle.getCustomersPerHour(); 
// seattle.getCookiesPurchasedPerHour(); 
// seattle.gettotalCookiesPerDay(); 
// console.log(seattle); 
// console.log(salmonBakery); 


// // seattle.render();

// let tokyo = new Store ('Tokyo', 3, 24, 1.2); 
// tokyo.getCustomersPerHour(); 
// tokyo.getCookiesPurchasedPerHour(); 
// tokyo.gettotalCookiesPerDay(); 
// console.log(tokyo); 
// console.log(salmonBakery); 

// let dubai = new Store ('Dubai', 11, 38, 3.7); 
// dubai.getCustomersPerHour(); 
// dubai.getCookiesPurchasedPerHour(); 
// dubai.gettotalCookiesPerDay(); 
// console.log(dubai); 
// console.log(salmonBakery); 

// let paris = new Store ('Paris', 20, 38, 2.3); 
// paris.getCustomersPerHour(); 
// paris.getCookiesPurchasedPerHour(); 
// paris.gettotalCookiesPerDay(); 
// console.log(paris); 
// console.log(salmonBakery); 

// let lima = new Store ('Lima', 2, 16, 4.6); 
// lima.getCustomersPerHour(); 
// lima.getCookiesPurchasedPerHour(); 
// lima.gettotalCookiesPerDay(); 
// console.log(lima); 
// console.log(salmonBakery); 


// Store.prototype.renderStore = function() {
//   let currentRow = document.createElement('tr');  
//   parentElement.appendChild(currentRow); 
//     let tableData = document.createElement('td'); 
//     tableData.textContent = this.storeName;
//     currentRow.appendChild(tableData); 
//     for (let j = 0; j < this.cookiesPurchasedPerHour.length; j++){
//         let currentDatum = this.cookiesPurchasedPerHour[j];
//         let currentDatumCell = document.createElement('td'); 
//         currentDatumCell.textContent = currentDatum; 
//         currentRow.appendChild(currentDatumCell); 
//     }
//     let storeTotal = document.createElement('td');
//     storeTotal.textContent = this.totalCookiesPerDay;
//     currentRow.appendChild(storeTotal);
//   }

  
//   function headerRow(){
//     let row = document.createElement('tr');
//     parentElement.appendChild(row);
    
//     let td = document.createElement('td');
//     td.textContent = 'Store location'; 
//     row.appendChild(td);
//     for(let i = 0; i < storeHours.length; i++) {
//       let cityHeading = document.createElement('th');
//       cityHeading.textContent = storeHours[i];
//       row.appendChild(cityHeading);
//     }
//     let storeTotal = document.createElement('td');
//     storeTotal.textContent = 'Total';
//     row.appendChild(storeTotal);
//   }
//   // function renderTableHeader(){
//     //   let tableHeading = document.createElement('tr');
//     //   let cityHeading = document.createElement('th');
//     //   parentElement.appendChild(tableHeading); 
//     //   tableHeading.appendChild(cityHeading); 
//     //   cityHeading.textContent = 'stores'; 
//     //   for (let i = 0; i < storeHours.length; i++){
//       //     let currentTime = storeHours[i]; 
//       //     let currentTableHeader = document.createElement('th'); 
//       //     currentTableHeader.textContent = currentTime; 
//       //     tableHeading.appendChild(currentTableHeader); 
//       //   }
//       // }
      
// function createFooter(){
//   table.appendChild(footer);
  
//   let footerRow = document.createElement('tr');
//   footer.appendChild(footerRow);

//   let hourlySalmonstable = document.createElement('th');
//   hourlySalmonstable.textContent = 'Hourly Cookies';
//   footerRow.appendChild(hourlySalmonstable);

//   let dailyTotal = 0;
//   for (let i = 0; i < currentHourCustomers.length; i++) {
//     let hourlySalmons = 0;
//     for (let n = 0; n < Store; n++) {

//     }
//   }
  
// }

      // headerRow(); 
      // seattle.renderStore();
      // tokyo.renderStore();
      // dubai.renderStore();
      // paris.renderStore();
      // lima.renderStore();
      // renderTableMain(); 
      
      
      
      



















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
//seattle.cookiesPerHr();
// seattle.totalCookies();
// console.log('Seattle', seattle)
// console.log(myCities);