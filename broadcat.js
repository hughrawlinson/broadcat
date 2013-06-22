// client side code
// just include this js file in your html and enjoy the cats, man ;)

$("body").append(
	"<div id='catContainer'><img src='http://placehold.it/250x250' /></div>"
);
function catContainerPosition(){
	$("#catContainer").attr('style',
		"position:absolute;left:0px;bottom:0px;overflow:hidden;height:250px;width:250px;"
	);
}
$(document).ready(catContainerPosition());

$(window).resize(function() {
  catContainerPosition();
});

var pusher = new Pusher('1ccd6fd9880863b97f0d');

var channel = pusher.subscribe('international_cat_supply_channel');
channel.bind('the_catpocalypse', function(data) {
  $("#catContainer img").attr("src",data.heresACat);
});