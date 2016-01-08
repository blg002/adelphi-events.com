var targets = document.querySelectorAll('[data-iframe-target]');

for ( var i = 0; i < targets.length; i++ ) {
	targets[i].addEventListener('click', function(e) {
	  $.AP.setIframeSrc( this.href );

		e.preventDefault();
	});
}

$.AP.setIframeSrc = function( src ) {
	var iframe = document.querySelectorAll('[data-iframe]')[0];

	if ( iframe ) {
		iframe.src = src;
	} else {
		$.AP.injectIframe( src );
	}

	$('html,body').animate({
    scrollTop: $(document.querySelectorAll('[data-iframe-wrap]')[0]).offset().top
  }, 1000);
};

$.AP.injectIframe = function( src ) {
	var iframe     = '<iframe src="' +src+ '" width="100%" height="700" frameborder="0" data-iframe></iframe>'
	var iframeWrap = document.querySelectorAll('[data-iframe-wrap]')[0];

	iframeWrap.innerHTML = iframe;
};
