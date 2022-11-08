
debounce = function(func, wait, immediate){
	var timeout;
	return function(){
		var context = this, args = arguments;
		var later = function(){
			timeout = null;
			if(!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later,wait);
		if(callNow) func.apply(context, args);  
	};
};








(function() {
	

var $target = $('.anime'),
animatioClass ='anime-start',
offset = $(window).height() * 2/3;

function animeScroll() {
	var documentTop = $(document).scrollTop();
	
	 $target.each(function(){

	 	var itemtop = $(this).offset().top;
	 	if(documentTop > itemtop - offset){
	 		$(this).addClass(animatioClass);
	 	
	 	}
	 	else{
	 		$(this).removeClass(animatioClass);
	 	}
	 })

}
animeScroll();

$(document).scroll(debounce(function(){
	animeScroll();
},100));
}());