'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isDate;
function dateString(posDate) {
	if ((typeof posDate === 'undefined' ? 'undefined' : _typeof(posDate)) == 'object') {
		posDate = posDate.toLocaleDateString('es-US');
	}
	return posDate;
}

function isDate(date) {
	var expRegDate = /^(0?[1-9]|[12][0-9]|3[01])[\-/](0?[1-9]|1[012])[\-/](19|20)\d{2}$/;
	var dateConvert = dateString(date);
	return expRegDate.test(dateConvert);
}