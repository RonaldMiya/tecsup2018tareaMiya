"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isNumberPhone;
function isNumberPhone(phone) {
	var expRegMobile = /^(\+\d{1,3}[- ]?)?\d{9}$/;
	return expRegMobile.test(phone);
}