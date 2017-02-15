

$(document).ready(function(){

	/******Header*****/

	$( ".latest-each .featured-image:odd" ).css( "float", "right" );

	$('.nav-toggle').on('click', function(){

		$('.main-navigation').toggleClass('open');

	});


});

