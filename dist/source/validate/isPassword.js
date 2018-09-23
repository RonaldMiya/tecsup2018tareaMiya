"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = password;
function password(pass) {
	var expRegPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
	return expRegPass.test(pass);
}