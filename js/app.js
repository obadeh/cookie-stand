
var seattle = {

    min: 23,
    max: 65,
    AvgCookie: 6.3,
    cookies: [],
    randomCust: function () {

        var range = (this.max) - (this.min);
        var rand = (Math.random() * range) + this.min;
        return Math.ceil(rand);


    }

};



var Tokyo = {

    min: 3,
    max: 24,
    AvgCookie: 1.2,
    cookies: [],
    randomCust: function () {
        var range = this.max - this.min;
        var rand = (Math.random() * range) + this.min;
        return Math.ceil(rand);
    }
}


var Dubai = {

    min: 11,
    max: 38,
    AvgCookie: 3.7,
    cookies: [],

    randomCust: function () {
        var range = this.max - this.min;
        var rand = (Math.random() * range) + this.min;
        return Math.ceil(rand);

    }
}



var Paris = {

    min: 20,
    max: 38,
    AvgCookie: 2.3,
    cookies: [],

    randomCust: function () {
        var range = this.max - this.min;
        var rand = (Math.random() * range) + this.min;
        return Math.ceil(rand);
    }
}




var Lima = {

    min: 2,
    max: 16,
    AvgCookie: 4.6,
    cookies: [],

    randomCust: function () {
        var range = this.max - this.min;
        var rand = (Math.random() * range) + this.min;
        return Math.ceil(rand);
    }
}






var header1 = document.createElement('h1');
header1.textContent = 'Sales Data';

var asd = document.getElementById("test");
asd.appendChild(header1);

var paragraph = document.createElement('p');
paragraph.textContent = 'seattle';

var test = document.getElementById('test');
test.appendChild(paragraph);

var li = [];
var ul = document.createElement('ul');
test.appendChild(ul);

var shops = [seattle];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am'];
var cookies = [];
var result = [];
for (var i = 0; i < shops.length; i++) {

    var shop = shops[i];

    for (var h = 0; h < hours.length; h++) {


        var hour = hours[h];

        cookies[h] = Math.ceil((seattle.AvgCookie) * (seattle.randomCust()));
        shops[i].cookies[h] = cookies[h];

        result[h] = [hours[h] + ':' + cookies[h] + ' cookies'];




        li = document.createElement('li');

        li.textContent = result[h];


        ul.appendChild(li);

    };
}


var test = document.getElementById('test');




