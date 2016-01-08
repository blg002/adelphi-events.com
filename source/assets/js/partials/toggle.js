var toggle       = document.querySelectorAll( '[data-toggle]' )[0];
var toggleTarget = document.querySelectorAll( '[data-toggle-target]' );


[].slice.call( toggleTarget ).forEach( function( el ) {
	
	el.addEventListener('click', function( e ) {
		$.AP.setToggleView( this.dataset.toggleTarget );

		[].slice.call( toggleTarget ).forEach( function( target ) {
			target.classList.remove('is-selected');
		});

		this.classList.add('is-selected');

		e.preventDefault();
	});
});


$.AP.setToggleView = function( view ) {
	toggle.dataset.toggle = view;
};
