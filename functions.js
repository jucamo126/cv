$(document).ready(()=>{
	$('.menu-toggler').on('click',function() {
		$(this).toggleClass('open');
		$('.menu').slideToggle();
	});

});
$(function() {
$('nav a').click(()=>{
		var href = $(this).attr('href');
		var ofsetTTop = $(href).offset().top; 
		$('html,body').animate({'scrollTop':ofsetTTop});
		
	});
});
	

