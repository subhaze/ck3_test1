System.register([], function (_export, _context) {
	"use strict";

	return {
		setters: [],
		execute: function () {
			function nested() {
				console.log('nested');
			}

			_export("nested", nested);

			console.log("I'm a side effect, because I was imported somewhere (nest/nested.js)");
		}
	};
});

//# sourceMappingURL=nested.js.map