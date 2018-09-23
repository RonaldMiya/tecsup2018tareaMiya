"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isUrl;
function isUrl(url) {
	var expRegUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
	return expRegUrl.test(url);
}