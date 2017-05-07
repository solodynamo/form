
(function () {
	'use strict';

	if (window.location.search === '?200') {
		$('#main').html('<h1 class="title is-2">Thanks for your precious time!</h1><p>Redirecting.....');

		setTimeout(function () {
			window.location.href = 'https://solodynamo.github.io';
		}, 2000);
	}
})();
