System.register(['./moar'], function (_export, _context) {
  "use strict";

  var moar, other;
  return {
    setters: [function (_moar) {
      moar = _moar.moar;
      other = _moar.other;
    }],
    execute: function () {

      moar();
      other();
    }
  };
});

//# sourceMappingURL=main.js.map