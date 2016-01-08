//= require plugins/jquery.nav


(function($, window, undefined) {

  $('header.header').nav({
    triggerPoint: function(data) {
        return $('.hero').outerHeight() - $('header.header').outerHeight();
      }
  });

})(jQuery, this);
