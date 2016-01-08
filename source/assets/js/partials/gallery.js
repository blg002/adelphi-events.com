(function($, window, undefined) {
	var eventTargets = document.querySelectorAll('[data-gallery-target]');
	var events = document.querySelectorAll('[data-event]');

	for ( var i = 0; i < eventTargets.length; i++ ) {
		eventTargets[i].addEventListener('click', function(e) {
		  $.AP.toggleEvent( this.href.split('#')[1] );

			e.preventDefault();
		});
	}

	$.AP.toggleEvent = function( couple ) {
		for ( var i = 0; i < events.length; i++ ) {
			events[i].classList.remove('show');
			events[i].classList.add('hide');
		}

		document.getElementById(couple).classList.remove('hide');
		document.getElementById(couple).classList.add('show');
	};
})(jQuery, this);
