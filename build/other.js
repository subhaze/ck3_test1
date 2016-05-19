System.register(['./nest/nested'], function (_export, _context) {
  "use strict";

  var something;
  return {
    setters: [function (_nestNested) {}],
    execute: function () {
      _export('something', something = 'something');

      _export('something', something);
    }
  };
});

//# sourceMappingURL=other.js.map