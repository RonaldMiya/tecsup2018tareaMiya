"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isString;
function isString(str) {
	var expRegString = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	return expRegString.test(str);
}