"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isEmail;
function isEmail(email) {
	var expRegEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
	return expRegEmail.test(email);
}