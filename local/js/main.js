$(window).scroll(function(){
	if($('.navbar').offset().top > 50){
		$('.navbar-fixed-top').addClass('top-nav-collapse');
	}else{
		$('.navbar-fixed-top').removeClass('top-nav-collapse');
	}

});
$(function(){
	$('.page-scroll a').bind('click',function(){
		console.log('click');
		var $anchor = $(this);
		console.log($anchor.attr('href'));
		caro=$anchor;
		$('html,body').stop().animate({
			scrollTop:$($anchor.attr('href')).offset().top
		},600,'easeInExpo');
		event.preventDefault();
	});
});