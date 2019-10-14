
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

// render h1
var container = document.getElementById('content');
// var h1 =document.createElement('h1');
// container.appendChild(h1);
// h1.textContent='seattle';











var shops = [seattle, Tokyo, Dubai, Paris, Lima];
var shops1=["seattle", "Tokyo", "Dubai", "Paris", "Lima"];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



var totalCookies = 0;

for (var i = 0; i < shops.length; i++) {

    var shop = shops[i];


    var h1 = document.createElement('h1');
    container.appendChild(h1);
    h1.textContent = shops1[i] ;
    
    var ul = document.createElement('ul');
    container.appendChild(ul) ;





    for (var h = 0; h < hours.length; h++) {

        var hour = hours[h];

        shop.cookies[h] = Math.ceil((shop.AvgCookie) * (shop.randomCust()));

        // result[h] = [hours[h] + ':' + shop.cookies[h] + ' cookies'];

        result = hours[h] + ':' + shop.cookies[h] + ' cookies';

        // render to html
        var li = document.createElement('li');

        ul.appendChild(li);

        li.textContent = result;

        totalCookies += seattle.cookies[h];



        
    
    };


    var li = document.createElement('li');
    li.textContent = 'Total :' + totalCookies + ' cookies';
    ul.appendChild(li);

}











