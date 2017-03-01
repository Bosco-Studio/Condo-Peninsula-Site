global.jQuery = require('jquery');
var boostrap = require('bootstrap');


var revealElementsOnScroll = function() {
	var hiddenElements = jQuery('.scroll-hidden')
    for (var i = 0; i < hiddenElements.length; i++) {
    	if (jQuery(window).scrollTop() <= (jQuery(hiddenElements[i]).offset().top + 50) 
    		&& jQuery(window).scrollTop() + jQuery(window).height() >=  (jQuery(hiddenElements[i]).offset().top)) {
    		jQuery(hiddenElements[i]).addClass('showing');
    	}else {
    		jQuery(hiddenElements[i]).removeClass('showing');
    	};
    }
};
revealElementsOnScroll();
/*Scroll Functions*/
jQuery(window).scroll(function () {
    revealElementsOnScroll();
});