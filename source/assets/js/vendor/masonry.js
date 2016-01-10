//= require masonry/dist/masonry.pkgd.js
//= require imagesloaded/imagesloaded.pkgd.js


(function($, window, undefined) {

	var $gallery = $('[data-mason]').imagesLoaded( function() {
	  $gallery.masonry({
			itemSelector: '.mason-item',
			columnWidth: '.mason-item',
			percentPosition: true,
	  });
	});

})(jQuery, this);
