"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isNumber;
function isNumber(num) {
	var expRegNumber = /^([0-9])*$/;
	return expRegNumber.test(num);
}