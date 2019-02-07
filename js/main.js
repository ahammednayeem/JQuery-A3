/* All Gallery Function */

$(".all-gallery").click(function(){
	$(".web").show();
	$(".graphics").show();
	$(".android").show();
	$(".photography").show();
});

/* Web Gallery Function */

$(".web-gallery").click(function(){
	$(".web").show();
	$(".graphics").hide();
	$(".android").hide();
	$(".photography").hide();
});

/* Graphics Gallery Function */

$(".gd-gallery").click(function(){
	$(".web").hide();
	$(".graphics").show();
	$(".android").hide();
	$(".photography").hide();
});

/* Android Gallery Function */

$(".aa-gallery").click(function(){
	$(".web").hide();
	$(".graphics").hide();
	$(".android").show();
	$(".photography").hide();
});

/* Photography Gallery Function */

$(".pt-gallery").click(function(){
	$(".web").hide();
	$(".graphics").hide();
	$(".android").hide();
	$(".photography").show();
});