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

/* Smooth scroll */
http://stackoverflow.com/questions/19349245/enable-smooth-scrolling-for-my-website-in-all-browsers
/*===================*/
Math.easeOut = function (t, b, c, d) { t /= d; return -c * t*(t-2) + b; };

(function() { // do not mess global space
var
  interval, // scroll is being eased
  mult = 0, // how fast do we scroll
  dir = 0, // 1 = scroll down, -1 = scroll up
  steps = 30, // how many steps in animation
  length = 30; // how long to animate
function MouseWheelHandler(e) {
  e.preventDefault(); // prevent default browser scroll
  clearInterval(interval); // cancel previous animation
  ++mult; // we are going to scroll faster
  var delta = -Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  if(dir!=delta) { // scroll direction changed
    mult = 1; // start slowly
    dir = delta;
  }
  for(var tgt=e.target; tgt!=document.documentElement; tgt=tgt.parentNode) {
    var oldScroll = tgt.scrollTop;
    tgt.scrollTop+= delta;
    if(oldScroll!=tgt.scrollTop) break;
  }
  var start = tgt.scrollTop;
  var end = start + length*mult*delta; // where to end the scroll
  var change = end - start; // base change in one step
  var step = 0; // current step
  interval = setInterval(function() {
    var pos = Math.easeOut(step++,start,change,steps);
    //window.scrollTo(0,pos);
    tgt.scrollTop = pos;
    if(step>=steps) { // scroll finished without speed up - stop by easing out
      mult = 2;
      clearInterval(interval);
    }
  },10);
}
window.addEventListener("mousewheel", MouseWheelHandler, false);
window.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
})();



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