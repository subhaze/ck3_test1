System.register(['./other'], function (_export, _context) {
	"use strict";

	var _other;

	return {
		setters: [function (_other2) {
			_other = _other2;
		}],
		execute: function () {
			function moar() {
				console.log('moar');
			}

			_export('moar', moar);

			function other() {
				console.log(_other.something);
			}

			_export('other', other);
		}
	};
});

//# sourceMappingURL=moar.js.map