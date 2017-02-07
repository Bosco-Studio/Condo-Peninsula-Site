var toggleNav = function(){
	if ($('#main-wrapper').hasClass('show-nav')) {
	  // Do things on Nav Close
	  $('#main-wrapper').removeClass('show-nav');
	} else {
	  // Do things on Nav Open
	  $('#main-wrapper').addClass('show-nav');
	}

  if ($('#menu-wrapper').hasClass('show-nav')) {
    // Do things on Nav Close
    $('#menu-wrapper').removeClass('show-nav');
    $('#main-menu-toggler').removeClass('on');
  } else {
    // Do things on Nav Open
    $('#menu-wrapper').addClass('show-nav');
    $('#main-menu-toggler').addClass('on');
  }


	if ($('#blur').hasClass('displayed')) {
	  // Do things on Nav Close
	  $('#blur').removeClass('displayed');
	} else {
	  // Do things on Nav Open
	  $('#blur').addClass('displayed');
	}
	/*Aliena el menu8*/
	/*$('#offNav-wrapper').css('top', $(window).scrollTop() + 20);*/
	/*focus al menu
	window.location.hash = '#menu-wrapper';*/
},
togglePortfolioGal = function(event){
  var target = event.target;
  var portfolioItemsTargets = $(".portfolio-gal-item");
  var hiddenTargets = $(".hidden-gal-item");

  if ($(target).hasClass('hidden-gal-item-closer')) {
    var parent = $(target).offsetParent();
    $(parent).removeClass('item-open');
  };

  if ($(target).hasClass('item-open')) {
    // Do things on Item Close
    $(target).removeClass('item-open');
    //scrolls to target
    $('html, body').animate({
        scrollTop: ($("#portfolio").offset().top - 100)
    }, 1000);
  } else {
    // Do things on Item Open
    for (var i = 0; i < portfolioItemsTargets.length; i++) {
      var thumParent = $(target).offsetParent()[0];
      var currThumb = portfolioItemsTargets[i];
      if (thumParent == currThumb) {
        $(hiddenTargets[i]).addClass('item-open');
        //scrolls to target
        $('html, body').animate({
            scrollTop: ($("#portfolio").offset().top - 100)
        }, 1000);
      }
    };
  }
},
initAutoImageScroller = function() {
  var y = 0;
  var interval;
  //var Screen = $(this).find('.iphone-border');
  var Screen = $('.iphone-border');
  var img = Screen.find('img');
  var endOfImage = false;
  var scroll = function() {
    var screenHeight = Screen.height();
    var swipeDistance = screenHeight / 2;
    if (y - swipeDistance <= -img.height() + screenHeight) {
        y = -img.height() + screenHeight;
        endOfImage = true;
    } else {
        y -= swipeDistance;
    }
    img.css({
        'transform': 'translateY(' + y + 'px)'
    });
    if (endOfImage) {
        y = 0;
        clearInterval(interval);
        setTimeout(function() {
            img.css({
                'transform': 'translateY(' + y + 'px)'
            });
            endOfImage = false;
            interval = setInterval(scroll, 1000);
        }, 2000);
    }
  }
  interval = setInterval(scroll, 1000);
}
checkForFromUrl = function() {
  if (window.location.href.indexOf("#FormSubmittedCorrectly:)") > -1) {
      $('html, body').animate({
          scrollTop: ($("#contact-us").offset().top - 100)
      }, 1000);
      $("#form-submitted-correctly").addClass('open');
  }
};
checkForFromUrl();
initAutoImageScroller();

/*Headroom acativation*/
$("header").headroom({
  "offset": 0,
  "tolerance": 0,
  "classes": {
    "initial": "header--fixed",
    "pinned": "slideDown",
    "unpinned": ""
  }
});
/*End Headroom acativation*/

/*Type Js acativation*/
$(function(){
    var stringsElement = $('#typed-strings');
    $(".typeJS").typed({
      strings: ["Transforme su imagen.", "Desarrolle sus plataformas.", "Ahorre dinero.", "Atraiga clientes."],
      typeSpeed: 0,
      typeSpeed: 30,
      loop: true
    });
});
/*End Type Js acativation*/



/*Eventos*/
$(function() {
  $('.toggle-nav').click(function() {
    toggleNav();
  });
  $('#blur').click(function() {
    toggleNav();
  });
  $('.portfolio-gal-item').click(function(event) {
    togglePortfolioGal(event);
  });
  $('.hidden-gal-item').click(function(event) {
    togglePortfolioGal(event);
  });
  $('#submitted-correctly-closer').click(function(event) {
    $('#form-submitted-correctly').removeClass('open');
  });
});
/*Alienar menu con el header*/
$(window).scroll(function () {
    if ($(window).scrollTop()) {
        /*$('#offNav-wrapper').css('top', $(window).scrollTop() + 20);*/
    }
}
);

/*Nivel de prueba*/
$(function() {
  $('#LL2').click(function() {
    // Calling a function in case you want to expand upon this.
    $('#menuLvl1').slideUp();
    $('#menuLvl2').slideDown();
  });
});
$(function() {
  $('#backL2').click(function() {
    // Calling a function in case you want to expand upon this.
    $('#menuLvl2').slideUp();
    $('#menuLvl1').slideDown();
  });
});
/*END Eventos*/
