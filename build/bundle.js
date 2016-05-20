(function () {
	'use strict';

	console.log("I'm a side effect, because I was imported somewhere (nest/nested.js)");

	var something = 'something';

	function moar() {
		console.log('moar');
	}

	function other() {
		console.log(something);
	}

	moar();
	other();

}());