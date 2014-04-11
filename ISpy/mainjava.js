var buswait = new Array();
var buswait11 = new Array();
var buswait12 = new Array();
var buswait13 = new Array();
var buswait21 = new Array();
var buswait22 = new Array();
var buswait23 = new Array();
var buswait31 = new Array();
var buswait32 = new Array();
var buswait33 = new Array();



buswait[0] = "img/busbench.png";
buswait[1] = "img/businessphone.jpg";
buswait[2] = "img/tree.png";
buswait[3] = "img/baby.jpeg";


$(document).ready(
	function()
	{
	for(var i = 0; i < buswait.length; i++) {
		buswait11[i] = buswait[i];
	}
	for(var i = 0; i < buswait.length; i++) {
		buswait12[i] = buswait[i];
	}
	for(var i = 0; i < buswait.length; i++) {
		buswait13[i] = buswait[i];
	}
	for(var i = 0; i < buswait.length; i++) {
		buswait21[i] = buswait[i];
	}
	for(var i = 0; i < buswait.length; i++) {
		buswait22[i] = buswait[i];
	}
	for(var i = 0; i < buswait.length; i++) {
		buswait23[i] = buswait[i];
	}
	for(var i = 0; i < buswait.length; i++) {
		buswait31[i] = buswait[i];
	}
	for(var i = 0; i < buswait.length; i++) {
		buswait32[i] = buswait[i];
	}
	for(var i = 0; i < buswait.length; i++) {
		buswait33[i] = buswait[i];
	}
	var which11 = Math.floor((Math.random()*buswait11.length));
	var which12 = Math.floor((Math.random()*buswait12.length));
	var which13 = Math.floor((Math.random()*buswait13.length));
	var which21 = Math.floor((Math.random()*buswait21.length));
	var which22 = Math.floor((Math.random()*buswait22.length));
	var which23 = Math.floor((Math.random()*buswait23.length));
	var which31 = Math.floor((Math.random()*buswait31.length));
	var which32 = Math.floor((Math.random()*buswait32.length));
	var which33 = Math.floor((Math.random()*buswait33.length));
	$('body').hide().fadeIn(1000);
	$('#piconeone').attr('src', buswait11[which11]);
	$('#piconetwo').attr('src', buswait12[which12]);
	$('#piconethree').attr('src', buswait13[which13]);
	$('#pictwoone').attr('src', buswait21[which21]);
	$('#pictwotwo').attr('src', buswait22[which22]);
	$('#pictwothree').attr('src', buswait23[which23]);
	$('#picthreeone').attr('src', buswait31[which31]);
	$('#picthreetwo').attr('src', buswait32[which32]);
	$('#picthreethree').attr('src', buswait33[which33]);

	$('#responses').html(which11 + " and " + which12);





	$( "#piconeone" ).click(function()
	{;
		$('#responses').html(buswait11);
			if(buswait11.length != 1)
			{
				buswait11.splice(which11,1);
				which11 = Math.floor((Math.random()*buswait11.length));
				$('#piconeone').attr('src',buswait11[which11]);
				$('#responses').html(which11 + " and " + which12);
			}
			else
			{
				$('#piconeone').attr('src',"");
				$('#responses').html(which11 + " and " + which12);
			}
	});
	$( "#piconetwo" ).click(function()
		{;
				if(buswait12.length != 1)
				{
					buswait12.splice(which12,1);
					which12 = Math.floor((Math.random()*buswait12.length));
					$('#piconetwo').attr('src',buswait12[which12]);

				}
				else
				{
					$('#piconetwo').attr('src',"");
				}
	});
	$( "#piconethree" ).click(function()
		{;
				if(buswait13.length != 1)
				{
					buswait13.splice(which13,1);
					which13 = Math.floor((Math.random()*buswait13.length));
					$('#piconethree').attr('src',buswait13[which13]);

				}
				else
				{
					$('#piconethree').attr('src',"");
				}
	});
	$( "#pictwoone" ).click(function()
		{;
				if(buswait21.length != 1)
				{
					buswait21.splice(which21,1);
					which21 = Math.floor((Math.random()*buswait21.length));
					$('#pictwoone').attr('src',buswait21[which21]);

				}
				else
				{
					$('#pictwoone').attr('src',"");
				}
	});
	$( "#pictwotwo" ).click(function()
		{;
				if(buswait22.length != 1)
				{
					buswait22.splice(which22,1);
					which22 = Math.floor((Math.random()*buswait22.length));
					$('#pictwotwo').attr('src',buswait22[which22]);

				}
				else
				{
					$('#pictwotwo').attr('src',"");
				}
	});
	$( "#pictwothree" ).click(function()
		{;
				if(buswait23.length != 1)
				{
					buswait23.splice(which23,1);
					which23 = Math.floor((Math.random()*buswait23.length));
					$('#pictwothree').attr('src',buswait23[which23]);

				}
				else
				{
					$('#pictwothree').attr('src',"");
				}
	});
	$( "#picthreeone" ).click(function()
		{;
				if(buswait31.length != 1)
				{
					buswait31.splice(which31,1);
					which31 = Math.floor((Math.random()*buswait31.length));
					$('#picthreeone').attr('src',buswait31[which31]);

				}
				else
				{
					$('#picthreeone').attr('src',"");
				}
	});
	$( "#picthreetwo" ).click(function()
		{;
				if(buswait32.length != 1)
				{
					buswait32.splice(which32,1);
					which32 = Math.floor((Math.random()*buswait32.length));
					$('#picthreetwo').attr('src',buswait32[which32]);

				}
				else
				{
					$('#picthreetwo').attr('src',"");
				}
	});
	$( "#picthreethree" ).click(function()
		{;
				if(buswait33.length != 1)
				{
					buswait33.splice(which33,1);
					which33 = Math.floor((Math.random()*buswait33.length));
					$('#picthreethree').attr('src',buswait33[which33]);

				}
				else
				{
					$('#picthreethree').attr('src',"");
				}
	});




});
