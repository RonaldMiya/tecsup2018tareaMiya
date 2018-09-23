"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isDecimal;
function isDecimal(decimal) {
	var expRegDecimal = /^[0-9]+(\.[0-9]{1,2})?$/;
	return expRegDecimal.test(decimal);
}