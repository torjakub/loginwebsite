// import styles
import './scss/index.scss';

// import JS files
import './js/mobile-nav';
import './js/pagination-infinite-scroll';

document.addEventListener( 'DOMContentLoaded', function() {
	window.onload = function() {
		window.requestAnimationFrame( function() {
			document.querySelector( 'body' ).style.opacity = '1';
		});
	};
});
