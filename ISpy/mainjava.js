var yeses = 0;
var count = 0;

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


var which = Math.floor((Math.random()*buswait.length));


$(document).ready(
	function()
	{
	 $('body').hide().fadeIn(1000);

	 $('img').attr('src',buswait[which]);
	 $('#texter').text(titles[which]);
	 $('#responses').html("Found: " + yeses);
	}
);



function yesans()
{
	if(buswait.length != 1)
	{
		yeses++;
		buswait.splice(which,1);
		titles.splice(which,1);
		which = Math.floor((Math.random()*buswait.length));
		$('img').attr('src',buswait[which]);
		$('#texter').text(titles[which]);
		$('#responses').html("Found: " + yeses);
	}
	else
	{
		if(count != 1)
		{
			yeses++;
			count = 1;
			$('#responses').html("Found: " + yeses);
		}
		$('img').attr('src',"");
		$('#texter').text("");
	}
}

function noans()
{
	if(buswait.length != 0)
	{
		if(buswait.length > 1)
		{
			buswait.splice(which,1);
			titles.splice(which,1);
			lengtharr = buswait.length;
			which = Math.floor((Math.random()*buswait.length));
			$('img').attr('src',buswait[which]);
			$('#texter').text(titles[which]);
		}
		else
		{
			$('img').attr('src',"");
			$('#texter').text("");
		}
		$('#responses').html("Found: " + yeses);
	}
}








