$(window).scroll(function(){
	var topScroll = $(this).scrollTop();
	if (topScroll >=  $(window).height() - 1.5*$('#ribbon').height()){
		$('#ribbon').css({
			'transform' : 'translate(0px, '+ 0 +'px)'
		});
	}
})