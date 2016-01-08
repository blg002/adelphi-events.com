//= require pagepiling.js/jquery.pagepiling.js

(function($, window, undefined) {

	if ( $('#pagepiling').length ) {

	  $('#pagepiling').pagepiling({
	  	sectionSelector: '.pagepiling-section',
	    navigation: {
	      'bulletsColor': '#414042',
	    },
	  });

	  $('.pagepiling-next').on('click', function(e){
	  	$.fn.pagepiling.moveSectionDown();
	  });
	
	}

})(jQuery, this);
