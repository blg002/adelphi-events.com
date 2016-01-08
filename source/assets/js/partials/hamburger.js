var hamburger          = document.querySelectorAll('[data-hamburger]')[0];
var hamburgerContainer = document.querySelectorAll('[data-hamburger-container]')[0];
var hamburgerOpen      = document.querySelectorAll('[data-hamburger-open]')[0];

hamburger.addEventListener('click', function() {
  $.AP.toggleHamburger();
});

$.AP.toggleHamburger = function() {
  if ( hamburgerContainer.classList.contains('is-selected') ) {
    hamburgerContainer.classList.remove('is-selected');
    hamburgerOpen.classList.remove('open');
  } else {
    hamburgerContainer.classList.add('is-selected');
    hamburgerOpen.classList.add('open');
  }
};
