global.jQuery = require('jquery');
var boostrap = require('bootstrap');


var revealElementsOnScroll = function() {
	var hiddenElements = jQuery('.scroll-hidden')
    for (var i = 0; i < hiddenElements.length; i++) {
    	if (jQuery(window).scrollTop() <= (jQuery(hiddenElements[i]).offset().top + 50) 
    		&& jQuery(window).scrollTop() + jQuery(window).height() >=  (jQuery(hiddenElements[i]).offset().top)) {
    		jQuery(hiddenElements[i]).addClass('showing');
    		console.log(jQuery(hiddenElements[i]).offset().top - 100);
    	}else {
    		jQuery(hiddenElements[i]).removeClass('showing');
    	};
    }
}
revealElementsOnScroll();
/*Alienar menu con el header*/
jQuery(window).scroll(function () {
    revealElementsOnScroll();
});




/*Mostrar dot nav desp del header
$(window).scroll(function () {
	var dotTargets = $(".dot-link");
	var sectionTargets = $(".content-section");
    if ($(window).scrollTop() >= 600) {
        $('#dot-nav-wrapper').fadeIn();
    }else {
    	$('#dot-nav-wrapper').fadeOut();
    }
    for (var i = 0; i < sectionTargets.length; i++) {
    	if ($(window).scrollTop() >= $(sectionTargets[i]).offset().top - 200) {
    		$('.current').removeClass('current');
    		$(dotTargets[i]).addClass('current');
    	};
    };
}	
);
*/