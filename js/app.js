// 'use strict';

// var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// function CookieShop(location, min, max, avgSale) {
//   this.location = location;
//   this.min = min;
//   this.max = max;
//   this.avgSale = avgSale;
//   this.hourlySales = [];
//   this.dailySales = 0;
//   this.generateHourlySales();
// }

// CookieShop.prototype.getRandomCustomerCount = function () {

//   var range = this.max - this.min;

//   var randomCount = Math.random() * range + this.min;

//   return Math.ceil(randomCount);
// }

// CookieShop.prototype.generateHourlySales = function () {

//   for (var i = 0; i < hours.length; i++) {

//     var cookiesSoldThisHour = Math.ceil(this.getRandomCustomerCount() * this.avgSale);

//     this.hourlySales.push(cookiesSoldThisHour);

//     this.dailySales += cookiesSoldThisHour;
//   }
// }

// CookieShop.prototype.render = function (table) {

//     var tr = document.createElement('tr');
//     table.appendChild(tr);
    
//     var td = document.createElement('td');
//     tr.appendChild(td);
//     td.textContent = this.location;

//   for (var i = 0; i < hours.length; i++) {

//     td = document.createElement('td');

//     tr.appendChild(td);

//     td.textContent = this.hourlySales[i];
//   }

//   td = document.createElement('td');
//   tr.appendChild(td);
//   td.textContent = this.dailySales;
// }

// // stand-alone function for header row
// function renderHeaderRow(table) {

//   var tr = document.createElement('tr');
  
//   table.appendChild(tr);

//   var th = document.createElement('th');

//   tr.appendChild(th); // no text content for first one

//   for(var i = 0; i < hours.length; i++) {

//     th = document.createElement('th');
//     tr.appendChild(th);
//     th.textContent = hours[i];
//   }

//   th = document.createElement('th');
//   tr.appendChild(th);
//   th.textContent = 'Daily Location Total';

// }

// // stand-alone function for footer row
// function renderFooterRow(table) {

//   var tr = document.createElement('tr');
  
//   table.appendChild(tr);
//   var footerRow=tr ;
//   var td = document.createElement('td');
  
//   tr.appendChild(td);
  
//   td.textContent = 'Totals';

//   var megaTotal = 0;

//   for (var hourIndex = 0; hourIndex < hours.length; hourIndex++) {
    
//     td = document.createElement('td');
    
//     tr.appendChild(td);

//     var sum = 0;

//     for (var shopIndex = 0; shopIndex < shops.length; shopIndex++) {

//       var shop = shops[shopIndex];
      
//       sum += shop.hourlySales[hourIndex];
//     }
    
//     td.textContent = sum;

//     megaTotal += sum;
//   }

//   td = document.createElement('td');
  
//   tr.appendChild(td);
  
//   td.textContent = megaTotal;
// }

// var seattle = new CookieShop('Seattle', 2, 16, 4.6);
// var tokyo = new CookieShop('Tokyo', 3, 24, 1.2);
// var dubai = new CookieShop('Dubai' , 11, 38, 3.7);
// var paris = new CookieShop('Paris', 20, 38, 2.3);
// var lima = new CookieShop('Lima', 23, 65, 6.3);



// var shops = [seattle , tokyo,dubai ,paris ,lima ]; // add more shops when ready


// var container = document.getElementById('content-area');

// var table = document.createElement('table');

// container.appendChild(table);

// renderHeaderRow(table);

// for (var i = 0; i < shops.length; i++) {
  
//   var shop = shops[i];

//   shop.render(table);
// }

// renderFooterRow(table);

// //////////////////////////////////////////


// var storeForm = document.getElementById("cookiesForm");

// storeForm.addEventListener('submit',function(event) {
//     event.preventDefault();
//     var name = event.target.name.value;
    
//     var min = event.target.min.value;
   
//     var max = event.target.max.value;
//     var avg = event.target.avg.value;
    
//     // console.log(interests);
    
//     // table.removeChild(footerRow);

//     var newStore = new CookieShop(name, min, max, avg);
//     // console.log(newStore);
    
//     newStore.render2();
// }
// );




// CookieShop.prototype.render2=function(){

//     var tr = document.createElement('tr');
//   table.appendChild(tr);
  
//   var td = document.createElement('td');
//   tr.appendChild(td);
//   td.textContent = this.location;

//   for (var i = 0; i < hours.length; i++) {

//     td = document.createElement('td');

//     tr.appendChild(td);

//     td.textContent = this.hourlySales[i];
//   }

//   td = document.createElement('td');
//   tr.appendChild(td);
//   td.textContent = this.dailySales;

// }



'use strict';

var hours = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];//14

var container = document.getElementById('content-area');

var footerRow; // hold on to footer row because we may delete and replace later

var table = document.createElement('table');
container.appendChild(table);
table.setAttribute('cellspacing','15px');

function addElement(tagName, container, text) {
  var element = document.createElement(tagName);
  container.appendChild(element);

  if (text) {
    element.textContent = text;
  }

  return element;
}


function Shop(location,min,max,avg){
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgcookie = avg;
  this.cookNumArr = [];
  this.totalSale = 0;

  this.generateHourlySales();
}

Shop.prototype.avgNumCus = function() {
  var rang = this.max - this.min;
  var rand = Math.random() * rang + this.min;
  return Math.ceil(rand);
};

Shop.prototype.generateHourlySales = function() {
  for (var i = 0; i < hours.length ; i++) {  
    var cookEachHour = Math.ceil(this.avgNumCus() * this.avgcookie);
    // console.log(cookEachHour);
    this.cookNumArr.push( cookEachHour );    
    this.totalSale += cookEachHour;
  }
  console.log(this.cookNumArr);
};

Shop.prototype.renderRow = function(table){

  var shopRow = addElement('tr',table);
  addElement('td',shopRow, this.location);

  for (var i = 0; i < this.cookNumArr.length; i++) {
    var currentHourlySales = this.cookNumArr[i];
    addElement('td', shopRow, currentHourlySales);
  }

  addElement('td', shopRow, this.totalSale);
};

function headerRow() {

  // access to all definitions in outside scopes , global 
  var hourRow = addElement('tr',table);

  addElement('th',hourRow);

  for(var i = 0; i < hours.length; i++) {
    addElement('th', hourRow, hours[i]);
  }

  addElement('th', hourRow, 'Daily Location Totals');
}

// stand-alone function
function createFooterRow() {

  console.log('footerRow');
  
  var tr = document.createElement('tr');

  footerRow = tr;
  
  table.appendChild(tr);

  var td = document.createElement('td');
  
  tr.appendChild(td);
  
  td.textContent = 'Totals';

  var megaTotal = 0;

  // loop through totals
  for (var hourIndex = 0; hourIndex < hours.length; hourIndex ++) {
    
    td = document.createElement('td');
    
    tr.appendChild(td);

    var totalHourSales = 0; // a number, the sum of all the sales for that hour for each shop

    for (var shopIndex = 0; shopIndex < shops.length; shopIndex++) {
      var shop = shops[shopIndex];
      totalHourSales += shop.cookNumArr[hourIndex];
    }

    td.textContent = totalHourSales;

    megaTotal += totalHourSales;
  }

  td = document.createElement('td');

  tr.appendChild(td);

  td.textContent = megaTotal;
}


var shops = [];
shops.push(new Shop('seattle', 23, 65, 6.3));
shops.push(new Shop('tokyo', 3, 24, 1.2));
shops.push(new Shop('dubai', 11, 38, 3.7));
shops.push(new Shop('paris', 20, 38, 2.3));
shops.push(new Shop('lima', 2, 16, 4.6));


headerRow();

for(var i = 0; i < shops.length; i++) {
  var currentShop = shops[i];
  currentShop.renderRow(table);
}

createFooterRow();

function submitHandler(event) {
  event.preventDefault();
  
  var locationName = event.target.location.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avgSales = parseFloat(event.target.avgSales.value);

  var newShop = new Shop(locationName, min, max, avgSales);

  shops.push(newShop);

  table.removeChild(footerRow);

  newShop.renderRow(table);

  createFooterRow();

}
var form = document.getElementById('cookiesForm');
form.addEventListener('submit', submitHandler);




