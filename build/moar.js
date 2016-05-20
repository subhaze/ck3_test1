'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.moar = moar;
exports.other = other;

var _other2 = require('./other');

var _other = _interopRequireWildcard(_other2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function moar() {
	console.log('moar');
}

function other() {
	console.log(_other.something);
}

//# sourceMappingURL=moar.js.map