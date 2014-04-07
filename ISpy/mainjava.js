var yeses = 0;
var nose = 0;


var buswait = new Array();

buswait[0] = "img/busbench.png";
buswait[1] = "img/businessphone.jpg";
buswait[2] = "img/tree.png";
buswait[3] = "img/baby.jpeg";

var titles = new Array();

titles[0] = "Bench";
titles[1] = "Phone Call";
titles[2] = "Tree";
titles[3] = "Baby";


var lengtharr = buswait.length
var which = Math.floor((Math.random()*lengtharr));

$(document).ready(
	function()
	{
	 $('body').hide().fadeIn(1000);
	 
	 $('img').attr('src',buswait[which]);
	 $('#texter').text(titles[which]);
	 $('#responses').html("Found: " + yeses + "<br>Not Found: " + nose + "<br>" + which);
	}
);



function yesans()
{
	if(lengtharr > 0)
	{
		yeses++;
		$('#responses').html("Found: " + yeses + "<br>Not Found: " + nose + "<br>" + which);
		buswait.splice(which,1);
		titles.splice(which,1);
		lengtharr--;
		which = Math.floor((Math.random()*lengtharr)+1);
		$('img').attr('src',buswait[which]);
		$('#texter').text(titles[which]);
	}
	
	
}

function noans()
{
	if(lengtharr > 0)
	{
		nose++;
		$('#responses').html("Found: " + yeses + "<br>Not Found: " + nose + "<br>" + which);
		buswait.splice(which,1);
		titles.splice(which,1);
		lengtharr--;
		which = Math.floor((Math.random()*lengtharr)+1);
		$('img').attr('src',buswait[which]);
		$('#texter').text(titles[which]);
	}
}








