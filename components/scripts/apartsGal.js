// Apartments Gallery
// ==============

var galleryLocations = [["../images/aparments/A/1.jpg",
	    						"../images/aparments/A/2.jpg",
	    						"../images/aparments/A/3.jpg",
	    						"../images/aparments/A/4.jpg"],
	    						["../images/aparments/B/1.jpg",
	    						"../images/aparments/B/2.jpg",
	    						"../images/aparments/B/3.jpg"],
	    						["../images/aparments/C/1.jpg",
	    						"../images/aparments/C/2.jpg",
	    						"../images/aparments/C/3.jpg",
	    						"../images/aparments/C/4.jpg"],
	    						["../images/aparments/C1/1.jpg",
	    						"../images/aparments/C1/2.jpg",
	    						"../images/aparments/C1/3.jpg",
	    						"../images/aparments/C1/4.jpg"],
	    						["../images/aparments/C2/1.jpg",
	    						"../images/aparments/C2/2.jpg",
	    						"../images/aparments/C2/3.jpg",
	    						"../images/aparments/C2/4.jpg",
	    						"../images/aparments/C2/5.jpg"]],
	currApartmentUrls,
	hiddenGal = jQuery(".hidden-gal"),		
	showGallery = function(element) {
		var apartmentTypes = jQuery(".aparment-type"),
			currApartment  = element,
		    firstImageDiv = hiddenGal.find(".gal")[0];
		hiddenGal.fadeIn();
		for (var i = 0; i < apartmentTypes.length; i++) {
		   	if (currApartment === apartmentTypes[i]) {
		   		currApartmentUrls = galleryLocations[i];
		   	}
		}
		console.log(firstImageDiv);
		jQuery(firstImageDiv).css('background-image', 'url(' + currApartmentUrls[0] + ')');						
	},
	changeGalIamge = function(nextIndex) {
		var currGalIndex = 0;

	}


jQuery('.aparment-type').click(function(event){
  event.preventDefault();
  showGallery(this);
});
/*
if (jQuery(".aparment-type").length > 0) {

}*/