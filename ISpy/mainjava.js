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


var which11 = Math.floor((Math.random()*buswait11.length));
var which12 = Math.floor((Math.random()*buswait12.length));
var which13 = Math.floor((Math.random()*buswait13.length));
var which21 = Math.floor((Math.random()*buswait21.length));
var which22 = Math.floor((Math.random()*buswait22.length));
var which23 = Math.floor((Math.random()*buswait23.length));
var which31 = Math.floor((Math.random()*buswait31.length));
var which32 = Math.floor((Math.random()*buswait32.length));
var which33 = Math.floor((Math.random()*buswait33.length));

$(document).ready(
	function()
	{
	for(var i = 0; i < buswait.length; i++) {
			buswait11[i] = buswait[i];
	}
	for(var i = 0; i < buswait.length; i++) {
			buswait12[i] = buswait[i];
	}
	$('body').hide().fadeIn(1000);
	$('#piconeone').attr('src', buswait11[which11]);
	$('#piconetwo').attr('src', buswait12[which12]);
/*	$('#piconethree').attr('src', buswait13[which13]);
	$('#pictwoone').attr('src', buswait21[which21]);
	$('#pictwotwo').attr('src', buswait22[which22]);
	$('#pictwothree').attr('src', buswait23[which23]);
	$('#picthreeone').attr('src', buswait31[which31]);
	$('#picthreetwo').attr('src', buswait32[which32]);
	$('#picthreethree').attr('src', buswait33[which33]);
*/
	$( "#piconeone" ).click(function()
	{;
		$('#responses').html(buswait11);
			if(buswait11.length != 1)
			{
				buswait11.splice(which11,1);
				which11 = Math.floor((Math.random()*buswait11.length));
				$('#piconeone').attr('src',buswait11[which11]);
				$('#responses').html(buswait);
			}
			else
			{
				$('#piconeone').attr('src',"");
				$('#responses').html(buswait11);
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
});
