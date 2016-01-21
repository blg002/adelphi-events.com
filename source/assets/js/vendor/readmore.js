//= require readmore/readmore.js


(function($, window, undefined) {

	$('[data-readmore]').readmore({
		collapsedHeight: 90,
		moreLink: '<p class="press-readmore"><span>Read More</span></p>',
		lessLink: '<p class="press-readmore"><span>Read Less</span></p>',
	});

})(jQuery, this);
