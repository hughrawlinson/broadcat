var http = require('http');
var Pusher = require('pusher');
var request = require('request');
var count = 0;
var url="https://api.instagram.com/v1/tags/meow/media/recent?client_id=96f9bfe647514976ba6cea29b9cb33f2";
var CATS;
var checkedInstagram = false;

var pusher = new Pusher({
			  appId: '38442',
			  key: '1ccd6fd9880863b97f0d',
			  secret: 'dd9e528ed20dca277c00'
			});

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    CATS = JSON.parse(body);
    checkedInstagram = true;
  }
})

// setInterval(gc,1800000);
setInterval(function(){
	if(checkedInstagram){
		pusher.trigger('international_cat_supply_channel', 'the_catpocalypse', {
		  "heresACat": CATS.data[count].images.standard_resolution.url
		});
		console.log(CATS.data[count].images.standard_resolution.url);
		count = (count+1)%CATS.data.length;
	}
},2000);