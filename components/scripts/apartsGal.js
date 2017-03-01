// Apartments Gallery
// ==============

var showGallery = function(element) {
	var apartmentTypes = jQuery(".aparment-type"),
		currApartment  = element,
	    hiddenGal = jQuery(".hidden-gal"),
	    galleryBackgrounds = [["","","","",""], ["","","","",""], ["","","","",""], ["","","","",""], ["","","","",""]];

	if (windowTop >= firstDivTop - 100 &&
	    windowTop <= lastDivBottom - jQuery(sectionTargets[numberOfSections]).height() + 50) {
	    jQuery('#dot-nav-wrapper').fadeIn(200);
	}else {
	  jQuery('#dot-nav-wrapper').fadeOut(200);
	}
	for (var i = 0; i < sectionTargets.length; i++) {
	  if (windowTop >= jQuery(sectionTargets[i]).offset().top - 200) {
	    jQuery('.current').removeClass('current');
	    jQuery(dotTargets[i]).addClass('current');
	  };
	};
}



if (jQuery(".aparment-type").length > 0) {

}